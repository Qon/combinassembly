export function assertNever(v: never): never {
	throw `Code shouldn't reach here, v: ${v}`;
}

export const floor = Math.floor;
export const ceil = Math.ceil;

export function isNumber(v: any) {
	return typeof v === 'number';
}
export function isObject(v: any) {
	return typeof v === 'object' &&
		!Array.isArray(v) &&
		v !== null;
}
export function isArray(v: any) {
	return Array.isArray(v);
}

export function enumerate<T>(array: string): Generator<[number, string]>;
export function enumerate<T>(array: T[]): Generator<[number, T]>;
export function* enumerate<T>(array: string | T[]): Generator<[number, string | T]> {
	for (let i = 0; i < array.length; i++)
		yield [i, array[i]];
}
export function reversed<T>(values: Generator<T> | T[]): T[] {
	// if (!Array.isArray(values))
		values = [...values]; // Do anyway because .reverse mutates
	return values.reverse();
}
export function* range(max: number) {
	for (let i = 0; i < max; i++)
		yield i;
}

export function zipLeft<A, B>(vsLeft: A[], vsRight: B[], defaultRight: B): [A, B][] {
	return vsLeft.map((l, i) => [l, vsRight[i] ?? defaultRight]);
}

export function removeEmpty(obj: any) {
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
		obj = obj.map(removeEmpty).filter((f: any) => f !== undefined);
		if (obj.length === 0)
			return undefined;
		return obj;
	}
	return obj;
}

export function bytesToBase64(bytes: Uint8Array) {
	const binString = String.fromCodePoint(...bytes);
	return btoa(binString);
}
