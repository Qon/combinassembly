import { enumerate, floor, range, reversed } from "./common.ts";
import { arithmetic, connect, decider, Green, pass, Red, renderBlueprintToString, smallLamp } from "./Blueprint.ts";
import { cellsCount, romBaseAddress, ROMMemorySignals } from "./Params.ts";
import { ROMPatch } from "./Patch.ts";


const groups = [
	{ addressSignal: 'signal-Y', resultSignal: 'signal-B' },
	{ addressSignal: 'signal-X', resultSignal: 'signal-A' },
	{ addressSignal: 'signal-J', resultSignal: 'signal-I' },
];
const cellSelectorSignal = 'signal-U';
const signalSelectorSignal = 'signal-V';
const signalSelectorRowsPerAddress = 2;

const rowWidth = Math.ceil(ROMMemorySignals.length / signalSelectorRowsPerAddress);

const rightInterfaceOffset = 1;
const cellSelectorsBaseX = -5;

let lastSignalSelectorArith = null;
let lastCellSelectorRow = null;
for (const [groupI, group] of enumerate(groups)) {
	let firstSignalSelector = null;
	let last = null;
	let leftLast = null;
	let firstRowLast = null;

	const groupY = groupI * signalSelectorRowsPerAddress * 2;

	for (const [memorySignalI, memorySignal] of enumerate(ROMMemorySignals)) {
		const x = memorySignalI % rowWidth;
		const y = floor(memorySignalI / rowWidth);

		const cur = decider(
			x, groupY + y * 2,
			signalSelectorSignal, '=', memorySignalI,
			pass(memorySignal)
		);

		firstSignalSelector = firstSignalSelector ?? cur;
		if (x === 0) {
			if (leftLast) {
				connect(leftLast.input, cur.input, Red);
				connect(leftLast.output, cur.output, Red);
			}
			leftLast = cur;
		} else {
			connect(last!.input, cur.input, Red);
			connect(last!.output, cur.output, Red);
		}
		if (y === 0)
			firstRowLast = cur;

		last = cur;
	}

	const collapser = arithmetic(
		rowWidth + rightInterfaceOffset, groupY,
		'signal-each', '+', 0,
		group.resultSignal,
	);
	connect(firstRowLast!.output, collapser.input, Red);

	let cellSelectorRow = []; // TODO: Why is it not used
	let firstCellSelector = null;
	let lastCellSelector = null;
	for (const cellSelectorI of range(cellsCount)) {
		const cellSelector = decider(
			cellSelectorsBaseX - cellSelectorI, groupI * 2,
			cellSelectorSignal, '=', cellSelectorI,
			pass('signal-everything'),
		);

		if (lastCellSelector) {
			connect(cellSelector.input, lastCellSelector.input, Green);
			connect(cellSelector.output, lastCellSelector.output, Red);
		}
		if (lastCellSelectorRow)
			connect(cellSelector.input, lastCellSelectorRow[cellSelectorI].input, Red);

		lastCellSelector = cellSelector;
		firstCellSelector = firstCellSelector ?? cellSelector;
		cellSelectorRow.push(cellSelector);
	}

	const cellSelectorArith = arithmetic(
		-3, groupY,
		group.addressSignal, '/', ROMMemorySignals.length,
		cellSelectorSignal,
	);
	const signalSelectorArith = arithmetic(
		-2, groupY,
		group.addressSignal, '%', ROMMemorySignals.length,
		signalSelectorSignal,
	);
	connect(cellSelectorArith.input, signalSelectorArith.input, Green);
	connect(cellSelectorArith.output, signalSelectorArith.output, Green);
	if (lastSignalSelectorArith !== null)
		connect(signalSelectorArith.input, lastSignalSelectorArith.input, Green);

	connect(cellSelectorArith.output, firstCellSelector!.input, Green);
	connect(firstCellSelector!.output, firstSignalSelector!.input, Red);

	lastSignalSelectorArith = signalSelectorArith;
	lastCellSelectorRow = cellSelectorRow;
}

const baseCombinatorY = groups.length * 2;
ROMPatch([],
	lastCellSelectorRow!.map(row => row.input),
	cellSelectorsBaseX, baseCombinatorY
);
// for (const cellSelectorI of range(cellsCount)) {
// 	let lastConnectionPoint = lastCellSelectorRow![cellSelectorI].input;

// 	for (const combinatorI of range(constantCombinatorsPerCell)) {
// 		const comb = constant(
// 			cellSelectorsBaseX - cellSelectorI, baseCombinatorY + combinatorI, []
// 		);
// 		connect(comb.output, lastConnectionPoint, Red);
// 		lastConnectionPoint = comb.output;
// 	}
// }

const lampY = groups.length * signalSelectorRowsPerAddress * 2;

let lastAddressShifter = null;
for (const [groupI, group] of reversed(enumerate(groups))) {
	const addressShifter = arithmetic(
		-2-groupI, lampY-(signalSelectorRowsPerAddress>1 ? 1 : 0),
		group.addressSignal, '-', romBaseAddress,
		group.addressSignal
	);
	if (lastAddressShifter) {
		connect(addressShifter.input, lastAddressShifter.input, Green);
		connect(addressShifter.output, lastAddressShifter.output, Green);
	}
	lastAddressShifter = addressShifter;
}
connect(lastAddressShifter!.output, lastSignalSelectorArith!.input, Green);
let lastConnectionPoint = lastAddressShifter!.input;

// let lastLamp = smallLamp(-2, lampY);
// connect(lastLamp.input, lastSignalSelectorArith!.input, Green);

for (const lampI of range(rowWidth)) {
	const lamp = smallLamp(lampI, lampY);
	connect(lamp.input, lastConnectionPoint, Green);
	lastConnectionPoint = lamp.input;
	// lastLamp = lamp;
}

const rightLamp = smallLamp(rowWidth + rightInterfaceOffset, lampY);
connect(rightLamp.input, lastConnectionPoint, Green);


// Output
console.log(renderBlueprintToString());
