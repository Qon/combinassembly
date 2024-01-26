import {default_combinassembly} from './default_combinassembly.js'
import {run_assembler} from './combinassembly.js'
import {inspect, explode, explode_with_splinters, combinatorial} from './util.js'

// let assembled = run_assembler(explode`
// .blubb
//     const   [A] 1, [out]
// `)
// for (let k in assembled) {
//     console.log({k})
//     console.log(assembled[k])
//     if (assembled[k] instanceof Error) console.log(JSON.stringify(assembled[k].cause, null, 4))
//     console.log()
// }
// Deno.exit()

const decoder = new TextDecoder();
let stdin_source = ''
for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);
  stdin_source += text
}
console.log(run_assembler(stdin_source)['bp-string'])


