import { assertNever, enumerate } from "./common.ts";
import { dereferenceBaseAddress, instructionIndexToAddress, operandEndAddress, romBaseAddress } from "./Params.ts";
import { dereferenceableEndAddress } from "./Params.ts";
import { memoryEndAddress } from "./Params.ts";
import { memoryBaseAddress } from "./Params.ts";


// TODOs:
// Parsing negative numbers
// **a = -1
// Instead of:
// **a = 0 - 1


function signedFits(value: number, bits: number): boolean {
	return -(2**(bits-1)) <= value && value < 2**(bits-1);
}


const commentChar = '#';
const assignmentChar = '=';
const labelChar = ':';
const dereferenceChar = '*';
const arrayLenInPlaceChar = '@';
const valueSeparatorChar = ',';

const operators = ['+', '-', '*', '/', '%', '^', '<<', '>>', 'AND', 'OR', 'XOR'] as const;
// const comparators = ['=', '<', '>', '>=', '<=', '!='] as const;
const comparators = ['>=', '<=', '!=', '=', '<', '>'] as const; // Order matters because of how matching works
type OperatorType = typeof operators[number];
type ComparatorType = typeof comparators[number];

const constKeyword = 'const';
const conditionKeyword = 'if';
const jumpKeyword = 'goto';
const haltKeyword = 'halt';
const arrayLenKeyword = 'len';

const newlineChars = '\n\r';

const digits = '0123456789';
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const nameFirstChar = '_' + alphabet + alphabet.toUpperCase();
const nameNextChars = nameFirstChar + digits;

const instructionBits = 32;
const registersCount = 16;
const registersBaseAddress = 16;
const addressBits = 14;
const addressSpace = 2**addressBits;
const constantBits = 16;
const operandConstantBits = 5;


const errorTextSnippetLength = 80;
const wrongBranch = new Error(`Couldn't match with this branch`);


type TargetDereferenceCount = 1 | 2;
type SourceDereferenceCount = 0 | 1 | 2;

type Target = {
	dereferenceCount: TargetDereferenceCount,
	value: string | number,
};
type Source = {
	dereferenceCount: SourceDereferenceCount,
	value: string | number,
};

type NameOrNumber = string | number;
type Expression = string | number;


type ResolvedTarget = {
	dereferenceCount: TargetDereferenceCount,
	value: number,
};
type ResolvedSource = {
	dereferenceCount: SourceDereferenceCount,
	value: number;
};

const programCounterTarget: ResolvedTarget = {
	dereferenceCount: 1,
	value: 16,
};
const zeroSource: ResolvedSource = {
	dereferenceCount: 0,
	value: 0,
};


type PackedInstruction = number;
type ConditionJumpTarget = number;


function packOperator(oper: OperatorType): number {
	switch (oper) {
		case '*': return 0;
		case '/': return 1;
		case '+': return 2;
		case '-': return 3;
		case '%': return 4;
		case '^': return 5;
		case '<<': return 6;
		case '>>': return 7;
		case 'AND': return 8;
		case 'OR': return 9;
		case 'XOR': return 10;
		default: assertNever(oper);
	}
}

function packComparator(comp: '<' | '=' | '<=' | '!='): number {
	switch (comp) {
		case '<': return 11;
		case '=': return 12;
		case '<=': return 13;
		case '!=': return 14;
		default: assertNever(comp);
	}
}

function packOperand(s: ResolvedSource): number {
	if (s.dereferenceCount === 0) {
		if (!signedFits(s.value, operandConstantBits))
			throw new Error(`Value ${s.value} is not possible to use as operand constant because it doesn't fit into ${operandConstantBits} signed-bit number`);
		const valueMask = (1 << operandConstantBits) - 1;
		return (1 << operandConstantBits)
			+ (s.value & valueMask);
	}

	if (s.value < memoryBaseAddress || operandEndAddress <= s.value)
		throw new Error(`Value ${s.value} is not possible to use as ${s.dereferenceCount}-dereferenceable operand because it has to be in the range [${memoryBaseAddress}, ${operandEndAddress})`);

	if (s.dereferenceCount === 1)
		return s.value;

	if (s.dereferenceCount === 2)
		return s.value - memoryBaseAddress + dereferenceBaseAddress;

	assertNever(s.dereferenceCount);
}

function packTarget(target: ResolvedTarget): number {
	if (target.value < memoryBaseAddress)
		throw new Error(`target.value (${target.value}) is < memoryBaseAddress (${memoryBaseAddress})`);

	if (target.dereferenceCount == 1) {
		if (target.value >= memoryEndAddress)
			throw new Error(`target.value (${target.value}) is >= memoryEndAddress(${memoryEndAddress})`);
		return target.value;
	} else if (target.dereferenceCount == 2) {
		if (target.value >= dereferenceableEndAddress)
			throw new Error(`target.value (${target.value}) is >= dereferenceableEndAddress(${dereferenceableEndAddress})`);
		return target.value - memoryBaseAddress + dereferenceBaseAddress;
	} else {
		assertNever(target.dereferenceCount);
	}	
}


function packConstant(
	secondHalf: boolean,
	value: number,
	target: ResolvedTarget,
): PackedInstruction {
	if (value < 0 || 2**constantBits <= value)
		throw new Error(`Value ${value} is out of 16-bit range to pack as constant`);
		// TODO: think about signed/unsigned

	return (1 << 31)
		+ (+secondHalf << 30)
		+ (value << 14)
		+ packTarget(target);
}


function packOperation(
	a: ResolvedSource, oper: OperatorType, b: ResolvedSource,
	target: ResolvedTarget,
): PackedInstruction {
	return (packOperator(oper) << 26)
		+ (packOperand(a) << 20)
		+ (packOperand(b) << 14)
		+ packTarget(target);
}


function packCondition(
	a: ResolvedSource, comp: ComparatorType, b: ResolvedSource,
	to: ConditionJumpTarget
): PackedInstruction {
	if (comp === '>=') {
		comp = '<=';
		[a, b] = [b, a];
	}
	if (comp === '>') {
		comp = '<';
		[a, b] = [b, a];
	}

	return (packComparator(comp) << 26)
		+ (packOperand(a) << 20)
		+ (packOperand(b) << 14)
		+ to;
}


export function compile(code: string) {
	const s = code;
	let i = 0;
	let parsed = []

	const anyAmountOf = (chars: string) => (i: number) => {
		while (chars.includes(s[i])) i++;
		return i;
	};
	const someAmountOf = (chars: string) => (i: number) => {
		const startI = i;
		i = anyAmountOf(chars)(i);
		if (i === startI) throw wrongBranch;
		return i;
	};
	const oneOfStrings = <T = string>(strings: readonly string[]) => (i: number) => {
		for (const str of strings) {
			const l = str.length;
			if (s.substring(i, i+l) === str)
				return [i+l, str] as [number, T];
		}
		throw wrongBranch;
	};

	const spacing = anyAmountOf(' \t');
	const spacingWithNewlines = someAmountOf(' \t\n\r');
	// (spacingWithNewlines as unknown as any).name = 'spacingWithNewlines';
	// console.log('name: ', spacingWithNewlines.name);

	const operator = oneOfStrings<OperatorType>(operators);
	const comparator = oneOfStrings<ComparatorType>(comparators);

	// TODO: word prefix shouldn't match as keyword
	// E.g. "gotoloop", shouldn't be parsed as "goto loop"
	const keyword = (word: string) => (i: number) => {
		const l = word.length;
		if (s.substring(i, i+l) === word)
			return i + l;
		throw wrongBranch;
	};
	const char = keyword;

	const optionalKeyword = (word: string) => (i: number) => {
		const l = word.length;
		if (s.substring(i, i+l) === word)
			return [i + l, true] as const;
		return [i, false] as const;
	};
	const optionalChar = optionalKeyword;

	function name(i: number): [number, string] {
		let res = '';

		let c = s[i];
		if (!nameFirstChar.includes(c)) throw wrongBranch;
		res += c;
		i++;

		c = s[i];
		while (nameNextChars.includes(c)) {
			res += c;
			i++;
			c = s[i];
		}

		return [i, res];
	}
	function number(i: number): [number, number] {
		if (!digits.includes(s[i])) throw wrongBranch;
		let res = parseInt(s[i++]);
		
		while (digits.includes(s[i])) {
			res = res * 10 + parseInt(s[i++]);
		}

		return [i, res];
	}
	function nameOrNumber(i: number): [number, string | number] {
		try { return name(i); }
		catch (err) { if (err !== wrongBranch) throw err; }

		return number(i);
	}
	const expression = nameOrNumber;

	function target(i: number): [number, Target] {
		i = char(dereferenceChar)(i);
		let dereferenceCount: 1|2 = 1;
		if (s[i] === dereferenceChar) {
			dereferenceCount = 2;
			i++;
		}

		i = spacing(i);

		let to;
		[i, to] = nameOrNumber(i);

		return [i, { dereferenceCount, value: to }];
	}

	function source(i: number): [number, Source] {
		const originalI = i;

		let dereferenceCount = 0;
		while (s[i] === dereferenceChar) {
			dereferenceCount++;
			i++;
		}
		if (dereferenceCount >= 3)
			throw new Error(`source: dereferenceCount can't be more than 2, but it is ${dereferenceCount} at position i(${originalI}): ${s.substring(originalI, originalI+errorTextSnippetLength)}`)

		i = spacing(i);

		let from;
		[i, from] = nameOrNumber(i);

		return [i, {
			dereferenceCount: dereferenceCount as SourceDereferenceCount,
			value: from
		}];
	}

	const optional = <T>(parser: (i: number) => [number, T]) => (i: number) => {
	// function optional<T>(parser: (i: number) => [number, T]): [number, T | undefined] {
		try {
			return parser(i);
		} catch (err) {
			if (err === wrongBranch) return [i, undefined] as [number, T | undefined];
			throw err;
		}
	}

	// ----- Statements -----
	let romIndex = 0;
	const romFs: (() => number[])[] = [];
	const rom: number[] = [];

	const constants: Record<string, number> = {};
	for (const [_ci, c] of enumerate('abcdefghijklmnop')) {
		const reg = registersBaseAddress
			+ (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1) % registersCount;
		constants[c] = reg;
		constants[c.toUpperCase()] = reg;
	}

	const constantExpressions: Record<string, Expression> = {};

	function defineConstant(name: string, value: number) {
		if (name in constants || name in constantExpressions)
			throw new Error(`label: ${name} has already been defined`);
		constants[name] = value;

	}
	function defineConstantExpression(name: string, expr: Expression) {
		if (name in constants || name in constantExpressions)
			throw new Error(`constant: ${name} has already been defined`);
		constantExpressions[name] = expr;
	}

	function resolve(value: NameOrNumber): number {
		if (typeof value === 'number') return value;
		if (value in constants) return constants[value];
		if (value in constantExpressions) return resolve(constantExpressions[value]);
		// TODO: ^ detect infinite dependencies
		throw new Error(`Name "${value}" is not defined anywhere`);
	}
	const resolveExpression = resolve;
	// function resolveExpression(expr: Expression): number {
	// }
	function resolveTarget(target: Target): ResolvedTarget {
		return {
			dereferenceCount: target.dereferenceCount,
			value: resolve(target.value),
		};
	}
	function resolveSource(source: Source): ResolvedSource {
		return {
			dereferenceCount: source.dereferenceCount,
			value: resolve(source.value),
		};
	}


	function constant(i: number): number {
		i = keyword(constKeyword)(i);
		i = spacing(i);
		let constName;
		[i, constName] = name(i);
		i = spacing(i);
		i = char(assignmentChar)(i);
		i = spacing(i);
		let exp;
		[i, exp] = expression(i);

		parsed.push({node: 'constant', constName, exp, romIndex})
		defineConstantExpression(constName, exp);

		return i;
	}

	function label(i: number): number {
		let labelName;
		[i, labelName] = name(i);
		i = spacing(i);
		i = char(labelChar)(i);

		parsed.push({node: 'label', labelName, romIndex})
		defineConstant(labelName, instructionIndexToAddress(romIndex));

		return i;
	}

	function comment(i: number): number {
		i = char(commentChar)(i);
		let start = i
		while (!newlineChars.includes(s[i]))
			i++;
		parsed.push({node: 'comment', text: s.slice(start, i)})
		return i;
	}

	function operation(i: number): number {
		let left: Target;
		[i, left] = target(i);
		i = spacing(i);
		i = char(assignmentChar)(i);
		// console.log('operation:', i, left);
		i = spacing(i);
		let op1: Source, operAndOp2: undefined | readonly [OperatorType, Source]; // oper, op2;
		[i, op1] = source(i);
		[i, operAndOp2] = optional((i: number) => {
			i = spacing(i);
			let oper, op2;
			[i, oper] = operator(i);
			i = spacing(i);
			[i, op2] = source(i);

			return [i, [oper, op2] as const];
		})(i);

		parsed.push({node: 'operation', left, op1, operAndOp2, romIndex})
		romFs[romIndex++] = () => {
			const tar = resolveTarget(left);

			const op1r = resolveSource(op1);
			if (!operAndOp2 && op1.dereferenceCount === 0) {
				if (!signedFits(op1r.value, 16))
					throw new Error(`It's is possible to assign any 32-bit value with two instructions, but the assembler doesn't support it yet`);
				// TODO: support any 32-bit value

				return [packConstant(false, op1r.value, tar)];
			}

			const [oper, op2] = operAndOp2 ?? ['+', zeroSource];

			const op2r = resolveSource(op2);
			return [packOperation(op1r, oper, op2r, tar)];
		};
		return i;
	}

	function condition(i: number): number {
		let left: Source, comp: ComparatorType, right: Source;
		i = keyword(conditionKeyword)(i);
		i = spacing(i);
		[i, left] = source(i);
		i = spacing(i);
		[i, comp] = comparator(i);
		i = spacing(i);
		[i, right] = source(i)
		i = spacing(i);

		let to: NameOrNumber;
		const tempI = i;
		try {
			i = keyword(jumpKeyword)(tempI);
			i = spacing(i);
			[i, to] = nameOrNumber(i);
		} catch (ex) {
			if (ex !== wrongBranch) throw ex;
			i = keyword(haltKeyword)(tempI);
			to = instructionIndexToAddress(romIndex);
		}

		parsed.push({node: 'condition', left, comp, right, to, romIndex})
		romFs[romIndex++] = () => {
			const l = resolveSource(left);
			const r = resolveSource(right);
			const t = resolve(to);

			return [packCondition(l, comp, r, t)];
		};
		return i;
	}

	function jump(i: number): number {
		i = keyword(jumpKeyword)(i);
		i = spacing(i);
		let to: Source;
		[i, to] = source(i);

		parsed.push({node: 'jump', to, romIndex})
		romFs[romIndex++] = () => {
			const t = resolveSource(to);
			if (t.dereferenceCount === 0) {
				if (t.value < 0 || addressSpace <= t.value)
					throw new Error(`Doesn't make sense to jump to ${t.value} because it is out of address space of ${addressSpace}`);
				return [packConstant(false, t.value, programCounterTarget)];
			}

			return [packOperation(t, '+', zeroSource, programCounterTarget)];
		}
		return i;
	}

	function halt(i: number): number {
		i = keyword(haltKeyword)(i);

		const thisInstructionAddress = instructionIndexToAddress(romIndex);
		parsed.push({node: 'halt', romIndex})
		romFs[romIndex++] = () => [packConstant(false, thisInstructionAddress, programCounterTarget)];

		return i;
	}

	function array(i: number): number {
		let arrayLengthName: string | undefined = undefined;
		[i, arrayLengthName] = optional(i => {
			i = keyword(arrayLenKeyword)(i);
			i = spacing(i);
			i = char('(')(i);
			i = spacing(i);
			
			let arrayLengthName;
			[i, arrayLengthName] = name(i);
			
			i = spacing(i);
			i = char(')')(i);
			i = spacing(i);
			return [i, arrayLengthName];
		})(i);

		let placeLengthInPlace: boolean;
		[i, placeLengthInPlace] = optionalChar(arrayLenInPlaceChar)(i);

		i = spacing(i);

		i = char('[')(i);
		i = spacing(i);

		const array: Expression[] = [];
		while (s[i] !== ']') {
			let expr;
			[i, expr] = expression(i);
			array.push(expr);

			i = spacing(i);

			let separatorPresent;
			[i, separatorPresent] = optionalChar(valueSeparatorChar)(i);
			if (!separatorPresent)
				break;
			// Allows trailing extra separator (',')
			
			i = spacing(i);
		}

		i = char(']')(i);

		if (arrayLengthName)
			defineConstant(arrayLengthName, array.length);

		parsed.push({node: 'array', arrayLengthName, placeLengthInPlace, array, romIndex})
		romFs[romIndex] = () => {
			const res = array.map(resolveExpression);
			for (const [j, v] of enumerate(res))
				if (!signedFits(v, instructionBits))
					throw new Error(`Array "${arrayLengthName ?? '<unnamed>'}" ${j}th element resolved value doesn't fit into ${instructionBits}-bit signed range: ${v}`);
			
			if (placeLengthInPlace)
				res.unshift(array.length);
			return res;
		};

		const totalLength = array.length + +placeLengthInPlace;
		romIndex += totalLength;

		return i;
	}

	function oneOf(i: number, ...parsers: ((i: number) => number)[]): number {
		for (const [_pi, parser] of enumerate(parsers)) {
			try {
				const resI = parser(i);
				const matched = s.substring(i, resI).trim();
				// if (matched)
				// 	console.log(`[${i}, ${resI}) - ${parser.name}: ${matched}`);
				return resI;
				// return parser(i);
			} catch (err) {
				if (err === wrongBranch) {
					// console.log(`[${i}, ...): ${parser.name} didn't match`);
					continue;
				}
				throw err;
			}
		}
		throw new Error(`oneOf: Can't match anything starting at i(${i}): ${s.substring(i, i+errorTextSnippetLength)}`);
	}

	while (i < code.length) {
		// console.log(i);
		i = oneOf(i,
			constant,
			label,
			comment,
			operation,
			condition,
			jump,
			halt,
			array,
			spacingWithNewlines
		);
	}

	for (const riStr in romFs) {
		const ri = parseInt(riStr);
		// Enumerating like this to account for sparse arrays
		const instructionCodes = romFs[ri]();
		for (const [j, instructionCode] of enumerate(instructionCodes))
			rom[ri + j] = instructionCode;
	}

	// console.log(Deno.inspect(parsed, {
	// 	showHidden: false,
	// 	depth: null,
	// 	maxArrayLength: null
	// }))
	// console.log(Deno.inspect(constants, {
	// 	showHidden: false,
	// 	depth: null,
	// 	maxArrayLength: null
	// }))
	// console.log(JSON.stringify({rom, parsed, constants}))
	return {rom, parsed, constants};
}

