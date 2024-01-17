// Can be executed here:
// https://burnysc2.github.io/Factorio/Tools/DecodeBlueprint/

let entities = [];

let cellSlots = 20;

let stride = 1;
let slotExtractorOffset = 1;

for (let i = 0; i < cellSlots; i++) {
	const isFirst = i === 0;
	const isLast = i === cellSlots - 1;

	const offset = stride * i;

	const signalChar = i < 10
		? i.toString()
		: String.fromCharCode('A'.charCodeAt(0) + i - 10);

	function neighbors(localOffset, circuit_id) {
		const res = [];
		if (!isFirst)
			res.push({
				entity_id: offset - stride + localOffset,
				circuit_id
			});
		if (!isLast)
			res.push({
				entity_id: offset + stride + localOffset,
				circuit_id
			});

		return res;
	}

	const slotExtractor = {
		"entity_number": offset + slotExtractorOffset,
		"name": "decider-combinator",
		"position": {
			"x": i + 0.5,
			"y": 0
		},
		"control_behavior": {
			"decider_conditions": {
				"first_signal": {
					"type": "virtual",
					"name": "signal-V"
				},
				"constant": i,
				"comparator": "=",
				"output_signal": {
					"type": "virtual",
					"name": "signal-" + signalChar
				},
				"copy_count_from_input": true
			}
		},
		"connections": {
			"1": {
				"red": neighbors(slotExtractorOffset, 1),
				"green": neighbors(slotExtractorOffset, 1),
			},
			"2": {
				"red": neighbors(slotExtractorOffset, 2),
			}
		}
	};

	entities.push(slotExtractor);
}


let blueprint = {
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

console.log(encodeBlueprintJSON(JSON.stringify(blueprint)));
// console.log(JSON.stringify(blueprint, null, 4));
