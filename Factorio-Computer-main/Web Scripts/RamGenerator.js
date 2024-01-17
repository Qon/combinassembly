// Can be executed here:
// https://burnysc2.github.io/Factorio/Tools/DecodeBlueprint/

let entities = [];

let memoryCellsCount = 16;

let stride = 4;
let bSelectorOffset = 1;
let aSelectorOffset = 2;
let memoryCellOffset = 3;
let writerOffset = 4;

for (let i = 0; i < memoryCellsCount; i++) {
	const isFirst = i === 0;
	const isLast = i === memoryCellsCount - 1;

	const offset = stride * i;

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

	const bSelector = {
		"entity_number": offset + bSelectorOffset,
		"name": "decider-combinator",
		"position": {
			"x": i + 0.5,
			"y": 0
		},
		"control_behavior": {
			"decider_conditions": {
				"first_signal": {
					"type": "virtual",
					"name": "signal-Y"
				},
				"constant": i,
				"comparator": "=",
				"output_signal": {
					"type": "virtual",
					"name": "signal-blue"
				},
				"copy_count_from_input": true
			}
		},
		"connections": {
			"1": {
				"red": [
					{
						"entity_id": offset + aSelectorOffset,
						"circuit_id": 1
					}
				],
				"green": neighbors(bSelectorOffset, 1)
			},
			"2": {
				"red": neighbors(bSelectorOffset, 2)
			}
		}
	};

	let aSelector = {
		"entity_number": offset + aSelectorOffset,
		"name": "decider-combinator",
		"position": {
			"x": i + 0.5,
			"y": 2
		},
		"control_behavior": {
			"decider_conditions": {
				"first_signal": {
					"type": "virtual",
					"name": "signal-X"
				},
				"constant": i,
				"comparator": "=",
				"output_signal": {
					"type": "virtual",
					"name": "signal-blue"
				},
				"copy_count_from_input": true
			}
		},
		"connections": {
			"1": {
				"red": [
					{
						"entity_id": offset + bSelectorOffset,
						"circuit_id": 1
					},
					{
						"entity_id": offset + memoryCellOffset,
						"circuit_id": 2
					}
				],
				"green": neighbors(aSelectorOffset, 1)
			},
			"2": {
				"red": neighbors(aSelectorOffset, 2)
			}
		}
	};

	let memoryCell = {
		"entity_number": offset + memoryCellOffset,
		"name": "decider-combinator",
		"position": {
			"x": i + 0.5,
			"y": 4
		},
		"control_behavior": {
			"decider_conditions": {
				"first_signal": {
					"type": "virtual",
					"name": "signal-Z"
				},
				"constant": i,
				"comparator": "≠",
				"output_signal": {
					"type": "virtual",
					"name": "signal-blue"
				},
				"copy_count_from_input": true
			}
		},
		"connections": {
			"1": {
				"red": [
					{
						"entity_id": offset + memoryCellOffset,
						"circuit_id": 2
					},
					{
						"entity_id": offset + writerOffset,
						"circuit_id": 2
					}
				],
				"green": [
					{
						"entity_id": offset + writerOffset,
						"circuit_id": 1
					}
				]
			},
			"2": {
				"red": [
					{
						"entity_id": offset + memoryCellOffset,
						"circuit_id": 1
					},
					{
						"entity_id": offset + aSelectorOffset,
						"circuit_id": 1
					}
				]
			}
		}
	};

	let writer = {
		"entity_number": offset + writerOffset,
		"name": "decider-combinator",
		"position": {
			"x": i + 0.5,
			"y": 6
		},
		"control_behavior": {
			"decider_conditions": {
				"first_signal": {
					"type": "virtual",
					"name": "signal-Z"
				},
				"constant": i,
				"comparator": "=",
				"output_signal": {
					"type": "virtual",
					"name": "signal-blue"
				},
				"copy_count_from_input": true
			}
		},
		"connections": {
			"1": {
				"red": neighbors(writerOffset, 1),
				"green": [
					{
						"entity_id": offset + memoryCellOffset,
						"circuit_id": 1
					},
					...neighbors(writerOffset, 1)
				]
			},
			"2": {
				"red": [
					{
						"entity_id": offset + memoryCellOffset,
						"circuit_id": 1
					}
				]
			}
		}
	};

	entities.push(bSelector, aSelector, memoryCell, writer);
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
		"version": 281479277641728
	}
};

function bytesToBase64(bytes) {
	const binString = String.fromCodePoint(...bytes);
	return btoa(binString);
}

function encodeBlueprintJSON(jsonString) {
	/*
	//var binary = Base64.decode(str.substring(1))
	var encoded = atob(str.substring(1))
	//console.log("binary", encoded)
	var decoded = pako.inflate(encoded)
	//console.log("uzip", decoded)
	var string = new TextDecoder("utf-8").decode(decoded)	  
	//console.log("string", string)
	var jsonObject = JSON.parse(string)
	//console.log("jsonObj", jsonObject)
	var jsonString = JSON.stringify(jsonObject, null, 4)
	//console.log("jsonString", jsonString)
	return jsonObject
	*/
	console.log('encodeBluepring');

	const decoded = new TextEncoder('utf-8').encode(jsonString);
	const encoded = pako.deflate(decoded, { level: 9 });
	const str = '0' + bytesToBase64(encoded);

	return str;    
}

console.log(encodeBlueprintJSON(JSON.stringify(blueprint)));
// console.log(JSON.stringify(blueprint, null, 4));
