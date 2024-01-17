import pako from 'https://deno.land/x/pako@v2.0.3/pako.js'

import { assertNever, bytesToBase64, isNumber, removeEmpty } from './common.ts';


export type EntityId = number;
export type Signal = string;
export type Comparator = '=' | '<' | '>' | '≥' | '≤' | '≠';
export type Operation = '+' | '-' | '*' | '/' | '%' | '^' | '<<' | '>>' | 'AND' | 'OR' | 'XOR';

export const Red = 'red';
export const Green = 'green';
export type WireColor = typeof Red | typeof Green;

export const Input = 'input';
export const Output = 'output';
export type ComponentSide = typeof Input | typeof Output;

export enum ComponentType {
	Decider = 'decider',
	Arithmetic = 'arythmetic',
	Constant = 'constant',
	SamllLamp = 'small-lamp',
}

export const Pass = 'pass';

export function pass(signal: Signal) {
	return {
		type: Pass,
		signal,
	};
}
export type DeciderResult = ReturnType<typeof pass>;

export type ConnectionTarget = {
	id: EntityId,
	type: ComponentSide,
};


export const components: Component[] = [];

let id = 1;
function buildDecider(
	x: number, y: number,
	left: Signal, comparator: Comparator, right: Signal | number,
	result: DeciderResult,
) {
	if (isNumber(left))
		throw `Left part of a decider can't be a number (${left})`;

	return {
		id,
		type: ComponentType.Decider as const,
		x, y,
		left, right,
		comparator, result,
		input: { type: Input as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
		output: { type: Output as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
	};
}
export function decider(
	x: number, y: number,
	left: Signal, comparator: Comparator, right: Signal | number,
	result: DeciderResult,
) {
	const res = buildDecider(x, y, left, comparator, right, result);
	components.push(res);
	id++;
	return res;
}

function buildArithmetic(
	x: number, y: number,
	left: Signal | number, operation: Operation, right: Signal | number,
	result: Signal,
) {
	return {
		id,
		type: ComponentType.Arithmetic as const,
		x, y,
		left, right,
		operation, result,
		input: { type: Input as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
		output: { type: Output as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
	};
}
export function arithmetic(
	x: number, y: number,
	left: Signal | number, operation: Operation, right: Signal | number,
	result: Signal,
) {
	const res = buildArithmetic(x, y, left, operation, right, result);
	components.push(res);
	id++;
	return res;
}

export type ConstantSignalEntry = {
	index: number,
	signal: Signal,
	value: number,
};

function buildConstant(
	x: number, y: number,
	entries: ConstantSignalEntry[],
) {
	return {
		id,
		type: ComponentType.Constant as const,
		x, y,
		entries,
		output: { type: Input as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
	};
}
export function constant(
	x: number, y: number,
	entries: ConstantSignalEntry[],
) {
	const res = buildConstant(x, y, entries);
	components.push(res);
	id++;
	return res;
}

function buildSmallLamp(
	x: number, y: number
) {
	return {
		id,
		type: ComponentType.SamllLamp as const,
		x, y,
		input: { type: Input as ComponentSide, id, red: [] as ConnectionTarget[], green: [] as ConnectionTarget[] },
	};
}
export function smallLamp(
	x: number, y: number,
) {
	const res = buildSmallLamp(x, y);
	components.push(res);
	id++;
	return res;
}

export type Decider = ReturnType<typeof buildDecider>;
export type Arithmetic = ReturnType<typeof buildArithmetic>;
export type Constant = ReturnType<typeof buildConstant>;
export type SmallLamp = ReturnType<typeof buildSmallLamp>;

export type Component = Decider | Arithmetic | Constant | SmallLamp;
export type WireEnd = Decider['input'];

export function connect(a: WireEnd, b: WireEnd, color: WireColor) {
	a[color].push({ id: b.id, type: b.type });
	b[color].push({ id: a.id, type: a.type });
}

function connectionEndRender(to: ConnectionTarget) {
	return {
		"entity_id": to.id,
		"circuit_id": to.type === Input ? 1 : 2,
	};
}

function componentToEntity(component: Component) {
	if (component.type === ComponentType.Decider) {
		const { id, x, y, left, right, comparator, result, input, output } = component;

		return {
			entity_number: id,
			name: "decider-combinator",
			position: { x: x + 0.5, y: y + 1 },
			control_behavior: {
				decider_conditions: {
					first_signal: {
						type: "virtual",
						name: left
					},
					...isNumber(right)
						? { constant: right }
						: { second_signal: {
							type: "virtual",
							name: right,
						} },
					comparator,
					output_signal: {
						type: "virtual",
						name: result.signal,
					},
					copy_count_from_input: result.type === Pass,
				}
			},
			connections: removeEmpty({
				"1": {
					red: input.red.map(connectionEndRender),
					green: input.green.map(connectionEndRender),
				},
				"2": {
					red: output.red.map(connectionEndRender),
					green: output.green.map(connectionEndRender),
				}
			}) ?? {},
		};
	} else if (component.type === ComponentType.Arithmetic) {
		const { id, x, y, left, right, operation, result, input, output } = component;

		return {
			entity_number: id,
			name: "arithmetic-combinator",
			position: { x: x + 0.5, y: y + 1 },
			control_behavior: {
				arithmetic_conditions: {
					...isNumber(left)
						? { first_constant: left }
						: { first_signal: {
							type: "virtual",
							name: left
						} },
					...isNumber(right)
						? { second_constant: right }
						: { second_signal: {
							type: "virtual",
							name: right,
						} },
					operation,
					output_signal: {
						type: "virtual",
						name: result,
					}
				}
			},
			connections: removeEmpty({
				"1": {
					red: input.red.map(connectionEndRender),
					green: input.green.map(connectionEndRender),
				},
				"2": {
					red: output.red.map(connectionEndRender),
					green: output.green.map(connectionEndRender),
				}
			}) ?? {},
		};
	} else if (component.type === ComponentType.Constant) {
		const { id, x, y, entries, output } = component;

		return {
			entity_number: id,
			name: "constant-combinator",
			position: { x: x + 0.5, y: y + 0.5 },
			control_behavior: {
				filters: entries.map(en => ({
					signal: {
						type: 'virtual',
						name: en.signal,
					},
					count: en.value,
					index: en.index + 1,
				})),
			},
			connections: removeEmpty({
				"1": {
					red: output.red.map(connectionEndRender),
					green: output.green.map(connectionEndRender),
				}
			}) ?? {},
		};
	} else if (component.type === ComponentType.SamllLamp) {
		const { id, x, y, input } = component;

		return {
			entity_number: id,
			name: "small-lamp",
			position: { x: x + 0.5, y: y + 0.5 },
			connections: removeEmpty({
				"1": {
					red: input.red.map(connectionEndRender),
					green: input.green.map(connectionEndRender),
				}
			}) ?? {},
		};
	}

	assertNever(component);
}

export function renderBlueprint() {
	const entities = components.map(componentToEntity);
	const res = {
		"blueprint": {
			"icons": [
				{
					"signal": {
						"type": "item",
						"name": "decider-combinator"
					},
					"index": 1
				}
			],
			entities,
			"item": "blueprint",
			"version": 281479277838336
		}
	};
	return res;
}

export const SignalsPerConstantCombinator = 20;




function encodeBlueprintJSON(jsonString: string) {
	const decoded = new TextEncoder().encode(jsonString);
	const encoded = pako.deflate(decoded, { level: 9 })!;
	const str = '0' + bytesToBase64(encoded);

	return str;
}

export function renderBlueprintToString() {
	const blueprintObject = renderBlueprint();
	const blueprintString = JSON.stringify(blueprintObject);
	return encodeBlueprintJSON(blueprintString);
	// console.log(JSON.stringify(blueprint, null, 4));
}
