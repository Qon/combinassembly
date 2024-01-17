import { range, zipLeft } from "./common.ts";
import { connect, constant, Red, SignalsPerConstantCombinator, WireEnd } from "./Blueprint.ts";
import { cellsCount, constantCombinatorsPerCell, ROMMemorySignals } from "./Params.ts";


export function ROMPatch(
	values: number[],
	previousRow?: WireEnd[],
	cellSelectorsBaseX?: number,
	baseCombinatorY?: number
) {
	cellSelectorsBaseX ??= 0;
	baseCombinatorY ??= 0;

	const romMemoryValues = cellsCount * ROMMemorySignals.length;
	if (romMemoryValues < values.length)
		throw new Error(`ROM can't hold ${values.length} values. Its maximum capacity is cellsCount(${cellsCount}) * ROMMemorySignals.length(${ROMMemorySignals.length}) = ${romMemoryValues}`);

	for (const cellSelectorI of range(cellsCount)) {
		let lastConnectionPoint = previousRow?.[cellSelectorI];

		const vs = values.slice(
			cellSelectorI * ROMMemorySignals.length,
			(cellSelectorI+1) * ROMMemorySignals.length
		);

		const signalEntries = zipLeft(ROMMemorySignals, vs, 0);
		// console.log(signalEntries);
	
		for (const combinatorI of range(constantCombinatorsPerCell)) {
			const comb = constant(
				cellSelectorsBaseX - cellSelectorI, baseCombinatorY + combinatorI,
				signalEntries.slice(
					combinatorI * SignalsPerConstantCombinator,
					(combinatorI+1) * SignalsPerConstantCombinator
				).map(([signal, value], index) => ({
					index,
					signal, value,
				}))
			);
			if (lastConnectionPoint)
				connect(comb.output, lastConnectionPoint, Red);
			lastConnectionPoint = comb.output;
		}
	}
}
