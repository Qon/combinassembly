import { ceil } from "./common.ts";
import { SignalsPerConstantCombinator } from "./Blueprint.ts";


export const memoryCellsCount = 128;
export const dereferencableCount = 16;

export const memoryBaseAddress = 16;
export const dereferenceBaseAddress = 0;

export const memoryEndAddress = memoryBaseAddress + memoryCellsCount;
export const dereferenceableEndAddress = memoryBaseAddress + dereferencableCount;
export const operandEndAddress = dereferenceableEndAddress;

export const romBaseAddress = 2**13;

export const ROMMemorySignals = [
	...Array(10).fill(null).map((_, i) => 'signal-'+i),
	...Array(20).fill(null).map((_, i) => 'signal-' + String.fromCharCode('A'.charCodeAt(0) + i)),
];
export const cellsCount = 10;
export const constantCombinatorsPerCell = ceil(ROMMemorySignals.length / SignalsPerConstantCombinator);

export const instructionIndexToAddress = (index: number) => romBaseAddress + index;
