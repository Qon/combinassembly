// Can be executed here:
// https://burnysc2.github.io/Factorio/Tools/DecodeBlueprint/

let floor = Math.floor;

function isNumber(v) {
	return typeof v === 'number';
}
function isObject(v) {
	return typeof v === 'object' &&
		!Array.isArray(v) &&
		v !== null;
}
function isArray(v) {
	return Array.isArray(v);
}

function* enumerate(array) {
	for (let i = 0; i < array.length; i++)
		yield [i, array[i]];
}

function removeEmpty(obj) {
	if (isObject(obj)) {
		for (const key of Object.keys(obj)) {
			const newField = removeEmpty(obj[key]);
			if (newField === undefined)
				delete obj[key];
			else obj[key] = newField;
		}
		if (Object.keys(obj).length === 0)
			return undefined;
		return obj;
	} else if (isArray(obj)) {
		obj = obj.map(removeEmpty).filter(f => f !== undefined);
		if (obj.length === 0)
			return undefined;
		return obj;
	}
	return obj;
}

let Red = 'red';
let Green = 'green';

let Input = 'input';
let Output = 'output';

let Decider = 'decider';

let Pass = 'pass';

function pass(signal) {
	return {
		type: Pass,
		signal,
	};
}

let components = [];

let id = 1;
function decider(x, y, left, comparator, right, result) {
	if (isNumber(left))
		throw `Left part of a decider can't be a number (${left})`;

	const res = {
		id,
		type: Decider,
		x, y,
		left, right,
		comparator, result,
		input: { type: Input, id, red: [], green: [] },
		output: { type: Output, id, red: [], green: [] },
	};
	components.push(res);
	id++;
	return res;
}

function connect(a, b, color) {
	a[color].push({ id: b.id, type: b.type });
	b[color].push({ id: a.id, type: a.type });
}

function connectionEndRender(to) {
	return {
		"entity_id": to.id,
		"circuit_id": to.type === Input ? 1 : 2,
	};
}

function componentToEntity(component) {
	if (component.type === Decider) {
		const { id, x, y, left, right, comparator, result, input, output } = component;

		return {
			entity_number: id,
			name: "decider-combinator",
			position: { x, y },
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
		}
	}

	throw `Unknown component type ${component.type}`;
}

function renderBlueprint() {
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


let memorySignals = [
	...Array(10).fill(null).map((_, i) => 'signal-'+i),
	...Array(15).fill(null).map((_, i) => 'signal-' + String.fromCharCode('A'.charCodeAt(0) + i)),
];
let addressSignals = ['signal-B', 'signal-A', 'signal-J'];
let cellSelectorSignal = 'signal-U';
let signalSelectorSignal = 'signal-V';
let signalSelectorRowsPerAddress = 2;

let rowWidth = Math.ceil(memorySignals.length / signalSelectorRowsPerAddress);

for (const [addressSignalI, addressSignal] of enumerate(addressSignals)) {
	let last = null;
	let leftLast = null;

	for (const [memorySignalI, memorySignal] of enumerate(memorySignals)) {
		const x = memorySignalI % rowWidth;
		const y = floor(memorySignalI / rowWidth);

		const cur = decider(
			x, (addressSignalI * signalSelectorRowsPerAddress + y) * 2,
			signalSelectorSignal, '=', memorySignalI,
			pass(memorySignal)
		);

		if (x === 0) {
			if (leftLast) {
				connect(leftLast.input, cur.input, Red);
				connect(leftLast.output, cur.output, Red);
			}
			leftLast = cur;
		} else {
			connect(last.input, cur.input, Red);
			connect(last.output, cur.output, Red);
		}
		last = cur;
	}
}


function bytesToBase64(bytes) {
	const binString = String.fromCodePoint(...bytes);
	return btoa(binString);
}

function encodeBlueprintJSON(jsonString) {
	console.log('encodeBluepring');

	const decoded = new TextEncoder('utf-8').encode(jsonString);
	const encoded = pako.deflate(decoded, { level: 9 });
	const str = '0' + bytesToBase64(encoded);

	return str;
}

let blueprintObject = renderBlueprint();
let blueprintString = JSON.stringify(blueprintObject);
console.log(encodeBlueprintJSON(blueprintString));
// console.log(JSON.stringify(blueprint, null, 4));
