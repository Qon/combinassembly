import { assertNever, range } from "./common.ts";
import { Comparator, connect, Decider, decider, Green, pass, Red, renderBlueprintToString, Signal, WireEnd } from "./Blueprint.ts";
import { dereferencableCount, dereferenceBaseAddress, memoryBaseAddress, memoryCellsCount } from "./Params.ts";



const valueSignal = 'signal-blue';
const address1Signal = 'signal-X';
const address2Signal = 'signal-Y';
const addressInstructionSignal = 'signal-J';
const addressWriteSignal = 'signal-Z';
const addressClockSignal = 'signal-dot';


enum RowConnectivity {
	Read, Write, Hold,
}

const lastInColumn: WireEnd[] = [];

function typicalRow(
	baseX: number, y: number,
	conditionSignal: Signal, comparator: Comparator,
	baseAddress: number, count: number,
	connectivity: RowConnectivity,
	replaceFirst?: Decider,
	connectionFunc?: (a: Decider, b: Decider) => void,
) {
	let first = null;
	let last = null;
	for (const i of range(count)) {
		const replaced = (i === 0 && replaceFirst);
		const d = replaced
			? replaceFirst
			: decider(baseX + i, y * 2, conditionSignal, comparator, baseAddress + i, pass(valueSignal));
		
		if (!replaced) first = first ?? d;

		if (last) {
			if (connectivity === RowConnectivity.Read) {
				connect(d.output, last.output, Red);
				connect(d.input, last.input, Green);
			} else if (connectivity == RowConnectivity.Write) {
				connect(d.input, last.input, Red);
				connect(d.input, last.input, Green);
			}
		}

		const col = lastInColumn[i];

		let connectToLast, connectToNext;
		if (connectivity === RowConnectivity.Read) {
			connectToLast = connectToNext = d.input;
		} else if (connectivity === RowConnectivity.Write) {
			connect(d.input, col, Green);
			connectToLast = connectToNext = d.output;
		} else if (connectivity === RowConnectivity.Hold) {
			connect(d.input, d.output, Red);
			connectToLast = d.output;
			connectToNext = d.input;
		} else assertNever(connectivity);

		if (col)
			connect(connectToLast, col, Red);
		lastInColumn[i] = connectToNext;

		if (!replaced) last = d;
	}

	if (connectionFunc)
		connectionFunc(first!, replaceFirst!);
}

typicalRow(0, 0, address2Signal, '=', memoryBaseAddress, memoryCellsCount, RowConnectivity.Read);
typicalRow(0, 1, address2Signal, '=', dereferenceBaseAddress, dereferencableCount, RowConnectivity.Read);
typicalRow(0, 2, address1Signal, '=', memoryBaseAddress, memoryCellsCount, RowConnectivity.Read);
typicalRow(0, 3, address1Signal, '=', dereferenceBaseAddress, dereferencableCount, RowConnectivity.Read);
typicalRow(0, 4, addressInstructionSignal, '=', memoryBaseAddress, memoryCellsCount, RowConnectivity.Read);
typicalRow(0, 5, addressWriteSignal, '≠', memoryBaseAddress, memoryCellsCount, RowConnectivity.Hold,
	decider(0, 10, addressClockSignal, '=', 0, pass(valueSignal)),
	(a, b) => {});
typicalRow(0, 6, addressWriteSignal, '=', memoryBaseAddress, memoryCellsCount, RowConnectivity.Write,
	decider(0, 12, addressClockSignal, '>', 0, pass(valueSignal)),
	(a, b) => connect(a.input, b.input, Green));
typicalRow(0, 7, addressWriteSignal, '=', dereferenceBaseAddress, dereferencableCount, RowConnectivity.Read);

// Output
console.log(renderBlueprintToString());
