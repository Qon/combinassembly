import {default_combinassembly} from './default_combinassembly.js'
import {run_assembler} from './combinassembly.js'
import {inspect, explode, explode_with_splinters, combinatorial} from './util.js'


console.log(run_assembler(explode`
.define ic ${[0, 1]}
.global mem ${[0, 1]}
  const   [A] 1, [out]
`)['bp-string'])
