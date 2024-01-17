import { range } from "./common.ts";
import { renderBlueprintToString } from "./Blueprint.ts";
import { compile } from "./Assembler.ts";
import { ROMPatch } from "./Patch.ts";


if (Deno.args.length < 1) {
	console.error(`Usage: Asm.ts <filepath>`);
	Deno.exit(1);
}

const filepath = Deno.args[0];

const factasmCode = Deno.readTextFileSync(filepath);
const byteCode = compile(factasmCode).rom;

console.log(Deno.inspect(byteCode, {
      showHidden: false,
      depth: null,
      maxArrayLength: null
  }));

for (const v of byteCode) {
	let s = '';
	for (let i = 31; i >= 0; i--)
		s += (v >> i) & 1;
	console.log(s);
}

// ROMPatch([...range(237)]); // Test line
ROMPatch(byteCode);
console.log(renderBlueprintToString());
