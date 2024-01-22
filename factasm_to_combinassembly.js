import {inspect, explode, explode_with_splinters, combinatorial} from './util.js'

//                                                                                      ,,    ,,
// `7MM"""Mq.                                                                           db  `7MM
//   MM   `MM.                                                                                MM
//   MM   ,M9 `7MM  `7MM  `7MMpMMMb.       ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb. `7MMpdMAo.`7MM    MM  .gP"Ya `7Mb,od8
//   MMmmdM9    MM    MM    MM    MM      6M'  OO  6W'   `Wb MM    MM    MM   MM   `Wb  MM    MM ,M'   Yb  MM' "'
//   MM  YM.    MM    MM    MM    MM      8M       8M     M8 MM    MM    MM   MM    M8  MM    MM 8M""""""  MM
//   MM   `Mb.  MM    MM    MM    MM      YM.    , YA.   ,A9 MM    MM    MM   MM   ,AP  MM    MM YM.    ,  MM
// .JMML. .JMM. `Mbod"YML..JMML  JMML.     YMbmd'   `Ybmd9'.JMML  JMML  JMML. MMbmmd' .JMML..JMML.`Mbmmd'.JMML.
//                                                                            MM
//                                                                          .JMML.

import { compile } from "./Factorio-Computer-main/Assembler.ts"
let programs = 'HanoiTowers NQueens GCD BubbleSort'.split(' ')
let idx = 0
const factasm = compile(Deno.readTextFileSync(`${Deno.cwd()}/Factorio-Computer-main/programs/${programs[idx]}.factasm`))
let codes = [combinassembly_from_factasm(factasm)]
console.log(codes[0])



// `7MM"""YMM                 mm
//   MM    `7                 MM
//   MM   d  ,6"Yb.  ,p6"bo mmMMmm  ,6"Yb.  ,pP"Ybd `7MMpMMMb.pMMMb.
//   MM""MM 8)   MM 6M'  OO   MM   8)   MM  8I   `"   MM    MM    MM
//   MM   Y  ,pm9MM 8M        MM    ,pm9MM  `YMMMa.   MM    MM    MM
//   MM     8M   MM YM.    ,  MM   8M   MM  L.   I8   MM    MM    MM
// .JMML.   `Moo9^Yo.YMbmd'   `Mbmo`Moo9^Yo.M9mmmP' .JMML  JMML  JMML.



// import { memoryBaseAddress, dereferenceBaseAddress } from "../Factorio-Computer-main/Params.ts"
const dereferenceBaseAddress = 0
const memoryBaseAddress = 16
const operandConstantBits = 5
const romBaseAddress = 2**13
const addressBits = 14
const addressSpace = 2**addressBits
const instructionIndexToAddress = index => romBaseAddress + index
const address_to_instruction_index = address => address - romBaseAddress
const atii = address => address
const wrongBranch = new Error(`Couldn't match with this branch`)

function oneOf(n, ...parsers) {
  for (const parser of parsers) {
    try {
      return parser(n)
    } catch (err) {
      if (err === wrongBranch) continue
      throw err
    }
  }
  throw new Error(`oneOf: Can't match anything for n(${n})`)
}


function unpack_operator(n) {
  switch (n) {
    case 0: return '*'
    case 1: return '/'
    case 2: return '+'
    case 3: return '-'
    case 4: return '%'
    case 5: return '^'
    case 6: return '<<'
    case 7: return '>>'
    case 8: return 'AND'
    case 9: return 'OR'
    case 10: return 'XOR'
    default: throw wrongBranch
  }
}
function unpack_comparator(n) {
  switch (n) {
    case 11: return '<'
    case 12: return '='
    case 13: return '<='
    case 14: return '!='
    default: wrongBranch
  }
}

function unpack_operand(n) {
  if ((n >> operandConstantBits) & 1) {
    const value_mask = (1 << operandConstantBits) - 1
    return {dereferenceCount: 0, value: n & value_mask}
  }
  return unpack_target(n)
}
function unpack_target(n) {
  if (n <= memoryBaseAddress)
    return {dereferenceCount: 2, value: n + memoryBaseAddress - dereferenceBaseAddress}
  return {dereferenceCount: 1, value: n}
}

function unpack_constant(instruction) {
  if (!((instruction >> 31) && 1))
    throw wrongBranch
  return {
    type: 'constant',
    secondHalf: (instruction >> 30) & 1,
    value: (instruction >> 14) & 0xFFFF,
    target: instruction & 0x3FFF,
  }
}

function unpack_operation(instruction) {
  return {
    type: 'operation',
    oper: unpack_operator((instruction >> 26)),
    a: unpack_operand((instruction >> 20) & 0x3F),
    b: unpack_operand((instruction >> 14) & 0x3F),
    target: unpack_target((instruction) & 0x3FFF),
  }
}

function unpack_condition(instruction) {
  return {
    type: 'condition',
    comp: unpack_comparator((instruction >> 26)),
    a: unpack_operand((instruction >> 20) & 0x3F),
    b: unpack_operand((instruction >> 14) & 0x3F),
    to: atii(instruction & 0x3FFF),
  }
}

function unpack_nop() {
  return {type: 'nop'}
}

function show_bits(n) {
  return ((n >> 31) & 1) + (n & 0x7FFFFFFF).toString(2).padStart(31, '0')
}

function sourcify_factasm(i, unpacked) {
  let regname = v => 16 < v && v < 17 + 36 ? String.fromCharCode(v + 'a'.charCodeAt(0) - 17) : v
  let render = v => `${'*'.repeat(v.dereferenceCount)}${v.dereferenceCount ? regname(v.value) : v.value}`

  switch (unpacked.type) {
  case 'constant':
    if (unpacked.target == 16) {
      if (i == atii(unpacked.value)) return `halt`
      return `goto ${atii(unpacked.value)}`
    }
    if (unpacked.target < 16)
      return `**${regname(unpacked.target+16)} = ${(unpacked.value)}`
    return `*${regname(unpacked.target)} = ${unpacked.value}`
  case 'operation':
    if ('**p' == render(unpacked.target) && '+' == unpacked.oper && '0' === render(unpacked.b)) {
      return `goto ${render(unpacked.a)}`
    }
    return `${render(unpacked.target)} = ${render(unpacked.a)} ${unpacked.oper} ${render(unpacked.b)}`
  case 'condition': return `if ${render(unpacked.a)} ${unpacked.comp} ${render(unpacked.b)} goto ${unpacked.to}`
  case 'nop': return `nop`
  }
}

function sourcify_factasm_parsed(o) {
  let regname = v => 16 < v && v < 17 + 36 ? String.fromCharCode(v + 'a'.charCodeAt(0) - 17) : v
  let render = v => `${'*'.repeat(v.dereferenceCount)}${v.dereferenceCount ? regname(v.value) : v.value}`

  let s = ' '.repeat(4)
  switch (o.node) {
  case 'constant': return `const ${o.constName} = ${o.exp}`
  case 'operation':
    s += `${render(o.left)} = ${render(o.op1)}`
    if (o.operAndOp2) s += ` ${o.operAndOp2[0]} ${render(o.operAndOp2[1])}`
    return s
  case 'condition': return s + `if ${render(o.left)} ${o.comp} ${render(o.right)} goto ${o.to}`
  case 'jump': return s + `goto ${render(o.to)}`
  case 'label_for_array': // fall through
  case 'label': return `${o.labelName}:`
  case 'halt': return s + `halt`
  case 'comment': return s += `#${o.text}`
  case 'array':
    s = ''
    if (o.arrayLengthName) s+= `len(${o.arrayLengthName})${o.placeLengthInPlace ? '@' : ''}`
    s += inspect(o.array)//.replace(/\n/g, '\n' + ' '.repeat(4))
    return s
  }
}

function sourcify_combinassembly(o, constants) {
  let regname = v => 16 < v && v < 17 + 36 ? String.fromCharCode(v + 'a'.charCodeAt(0) - 17) : v
  let render = v => `${'*'.repeat(v.dereferenceCount)}${v.dereferenceCount ? regname(v.value) : v.value}`
  let resolve = v => {
    while (constants.has(v)) v = constants.get(v)
    return v
  }
  let is_reg = n => /^[a-o]$/.test(n)
  let p = (n = 0)=>`${' '.repeat(n)}# ${sourcify_factasm_parsed(o).trim()}\n`

  let w = 7
  let s = ' '.repeat(4)
  let space = ' '.repeat(4)
  let ret = ''
  switch (o.node) {
  case 'constant': return p() + `.define ${o.constName} ${o.exp}`
  case 'operation':
    // s += `; ${render(o.left)} = ${render(o.op1)}`
    // if (o.left.dereferenceCount == 1) {}

    let resolved_left = resolve(o.left.value)
    if (is_reg(resolved_left) && o.left.dereferenceCount == 1) {
      let ss = s
      let resolved_op1 = resolve(o.op1.value)
      let op2_text = ''
      let op2_is_reg = false
      if (o.operAndOp2) {
        let operator = o.operAndOp2[0]
        let op2 = o.operAndOp2[1]
        let resolved_op2 = resolve(op2.value)
        op2_is_reg = is_reg(resolved_op2)
        op2_text = ` ${operator} ${render(op2)}`
        if (is_reg(resolved_op1) && o.op1.dereferenceCount == 1) {
          if (typeof resolved_op2 == 'number') {
            if (['+', '-'].includes(operator)) {
              let neg = operator == '-'
              if (resolved_left == resolved_op1) {
                ret = p(4) + ' '.repeat(4) + `${'addeq_rc'.padEnd(w)} ${o.op1.value}, ${neg?'-':''}${op2.value}`
                break;
              }
              ret = p(4) + ' '.repeat(4) + `${'add_rrc'.padEnd(w)} ${o.left.value}, ${o.op1.value}, ${neg?'-':''}${op2.value}`
              break;
            }
            ret = p(4) + space + `${'op_rrc'.padEnd(w)} ${o.left.value}, ${o.op1.value}, [${operator}], ${op2.value}`
            break;
          } else if (op2_is_reg && op2.dereferenceCount == 1) {
            if (['+', '-'].includes(operator) && resolved_left != resolved_op2) {
              let neg = operator == '-'
              if (resolved_left != resolved_op1 && !neg) {
                ret = p(4) + space + `${'add'.padEnd(w)} ${o.left.value}, ${o.op1.value}, ${op2.value}`
                break;
              }
              ret = p(4)
                + (resolved_left == resolved_op1 ? ''
                       : space + `${'mov'.padEnd(w)} ${o.left.value}, ${o.op1.value}\n`)
                + space + (neg ? `${'arith'.padEnd(w)} 0, [-], [V], [V],, ${op2.value}, ${o.left.value}`
                               : `${'addeq'.padEnd(w)} ${o.left.value}, ${op2.value}`)
              break;
            }
            // ret = p(4) + space + `${'op'} ${o.left.value}, ${o.op1.value}, [${operator}], ${op2.value}`
            // break;
          }
        }
      } else {
        if (is_reg(resolved_op1) && o.op1.dereferenceCount == 1) {
          ret = p(4) + space + `${'mov'.padEnd(w)} ${o.left.value}, ${o.op1.value}`
          break;
        }
      }
      if (!is_reg(resolved_op1)) {
        if (!op2_is_reg) {
          ret = p(4) + space + `${'mov_rc'.padEnd(w)} ${o.left.value}, ${o.op1.value}${op2_text}`
          break;
        }
      }
    }
    // return p(4)
    let left = o.left
    let op1 = o.op1
    let operator = o.operAndOp2?.[0]
    let op2 = o.operAndOp2?.[1]
    let ldc = left.dereferenceCount
    let op1dc = op1.dereferenceCount
    let op2dc = op2?.dereferenceCount ?? 0
    let l = []
    if (op1dc + op2dc == 0) {
      l.push(`mov_${ldc == 1 ? 'r' : 'd'}c ${left.value}, ${op1.value}${op2 ? ` ${operator} ${op2.value}` : ''}`)
      // if (ldc != 1) {
      //   // l.push(`cnop`)
      //   l.push(`mov_dr ${left.value}, q`)
      // }
    } else {
      if (op1dc != 1 && !op2 && ldc != 1) {
        l.push(`mov_dd ${left.value}, ${op1.value}`)
      } else {
        if (op1dc != 1) l.push(`${['mov_rc', 'mov', 'mov_rd'][op1dc]} q, ${op1.value}`)
        if (op2) {
          if (op2dc != 1) {
            l.push(`${['mov_rc', 'mov', 'mov_rd'][op2dc]} r, ${op2.value}`)
          }
          // if (l.length) l.push(`cnop`)
          l.push(`op ${ldc != 1 ? 'q' : left.value}, ${op1dc != 1 ? 'q' : op1.value}, [${operator}], ${op2dc != 1 ? 'r' : op2.value}`)
        }
        if (ldc != 1) {
          // l.push(`cnop`)
          l.push(`mov_dr ${left.value}, q`)
        }
      }
    }
    l = l.map(q=>{
      let r = /(\S+) (.*)/.exec(q)
      return r ? r[1].padEnd(w) + ' ' + r[2] : q
    }).map(q=>space + q)
    ret = p(4) + l.join('\n')
    break;
    // l= l.map(q=>q.replace(/^(\S+)/, '$1'))
  case 'condition': {
    let left = o.left
    let comp = o.comp
    let right = o.right
    let to = o.to
    let resolved_left = resolve(left.value)
    let resolved_right = resolve(right.value)
    // if (left.dereferenceCount == 0) {/*SWAP*/}
    // if (left.dereferenceCount == 1) {
    //   if (is_reg(resolved_left)) {
    //     if (right.dereferenceCount == 1) {
    //       if (is_reg(resolved_right)) {
    //         return  p(4) + space + `${'if'.padEnd(w)} ${left.value}, [${comp}], ${right.value}, ${to}`
    //       }
    //     }
    //   }
    // }
    //return p(4) // s + `if ${render(o.left)} ${o.comp} ${render(o.right)} goto ${o.to}`
    let l = []
    let ldc = left.dereferenceCount
    let rdc = right.dereferenceCount
    if (ldc != 1)
      l.push(`${['mov_rc', 'mov', 'mov_rd'][ldc]} q, ${left.value}`)
    if (rdc != 1) {
      l.push(`${['mov_rc', 'mov', 'mov_rd'][rdc]} r, ${right.value}`)
    }
    // if (ldc != 1 || rdc != 1) {
    //   l.push(`cnop`)
    // }
    l.push(`if ${ldc != 1 ? 'q' : left.value}, [${comp}], ${rdc != 1 ? 'r' : right.value}, ${to}`)
    l = l.map(q=>{
      let r = /(\S+) (.*)/.exec(q)
      return r ? r[1].padEnd(w) + ' ' + r[2] : q
    }).map(q=>space + q)
    return p(4) + l.join('\n')
  }
  case 'jump': {
    let to = o.to
    let l = []
    // if (to.dereferenceCount == 0) {
    //   return p(4) + s + `${'goto'.padEnd(w)} ${to.value}`
    // }
    l.push(`${['goto', 'goto_r', 'goto_d'][to.dereferenceCount]} ${to.value}`)
    // l.push(`cnop`)
    // l.push(`goto_r q`)
    l = l.map(q=>{
      let r = /(\S+) (.*)/.exec(q)
      return r ? r[1].padEnd(w) + ' ' + r[2] : q
    }).map(q=>space + q)
    return p(4) + l.join('\n')
  }
  case 'label_for_array': return p() + `# label_for_array`
  case 'label': return p() + `:${o.labelName}`
  case 'halt': return p(4) + s + `${'halt'}`
  case 'comment': return p().slice(0, -1) // + `${'comment'}`  //  ;${o.text} ;${o.text}
  case 'array': {
    let l = []
    let multi = 10
    let i = 0
    let len = o.array.length - 1
    len = len - len % multi
    len = len.toString().length
    for (; i < o.array.length; i += multi) {
      let s = `.rom ${o.label.labelName} + ${(i).toString().padStart(len)}`
      let slice = o.array.slice(i, i + multi)
      for (let j = 0; j < slice.length; ++j) {
        s += `,  [V] ${slice[j]}`
      }
      l.push(s)
    }
    s = p(4).slice(0, -1).replace(/\n/g, '\n' + ' '.repeat(4) + '# ') + '\n'
      + `.define ${o.arrayLengthName} ${o.array.length + o.placeLengthInPlace}\n`
      + `.global ${o.label.labelName} ${o.arrayLengthName}\n`
      + l.join('\n')
    return s
  }
  }
  return ret //+ '\n' + (ret[0] == ' ' ? space : '') + 'cnop'
}

// let decompiled = []
// let ii = 0
// for (let n of factasm.rom) {
//   let s = show_bits(n)
//   let unpacked = oneOf(n, unpack_constant, unpack_operation, unpack_condition, unpack_nop)
//   decompiled.push(unpacked)
//   console.log(s, instructionIndexToAddress(ii).toString().padStart(5) + ': ', sourcify_factasm(instructionIndexToAddress(ii), unpacked))
//   ++ii
// }

function combinassembly_from_factasm(factasm) {
  let code_from_factasm = ''
  let constants = new Map()
  for (let i = 0; i < factasm.parsed.length; ++i) {
    let o = factasm.parsed[i]
    if (o.node == 'constant') {
      constants.set(o.constName, o.exp)
    } else if (o.node == 'label') {
      if (factasm.parsed[i + 1]?.node == 'array') {
        o.node = 'label_for_array'
        factasm.parsed[i + 1].label = o
      } else
        constants.set(o.labelName, {type: 'label'})
    } else if (o.node == 'array') {
      if (o.arrayLengthName) constants.set(o.arrayLengthName, o.array.length)
    }
  }
  for (let i = 0; i < factasm.parsed.length; ++i) {
    let o = factasm.parsed[i]
    // console.log(sourcify_factasm_parsed(o, i))
    let s = sourcify_combinassembly(o, constants)
    code_from_factasm += s + '\n'
  }

  function factasm_deref2(o) {
    switch (o.node) {
    case 'operation':
      if (o.left.dereferenceCount == 2) return true
      if (o.op1.dereferenceCount == 2) return true
      if (o.operAndOp2?.[1].dereferenceCount == 2) return true
      break
    case 'condition':
      if (o.left.dereferenceCount == 2) return true
      if (o.right.dereferenceCount == 2) return true
      break
    case 'jump':
      if (o.to.dereferenceCount == 2) return true
      break
    }
    return false
  }

  if (1) {
    let s = `##### footer #####`
    code_from_factasm += s + '\n'

    if (factasm.parsed.some(factasm_deref2)) {
      s = `.global memory 256`
      code_from_factasm += s + '\n'
    }
    let directive_space = q=>{
      let r = /(\S+ \S+)( *)(.*)/.exec(q)
      if (!r) return q
      return r[1].padEnd(11) + ' ' + r[3]
    }
    s = `.define clear [white] 1
.define ipsig [black]
.define jumpsig [J]
.define memqsig [green]
.define memwsig [red]
.define ic 17
.define mc 1`
    .split('\n').map(directive_space).join('\n')
    // console.log(s)
    code_from_factasm += s + '\n'
    // console.log(`.define mc 8`)
    for (let i = 0; i < 15; ++i) {
      // console.log(`.define ${String.fromCharCode('a'.charCodeAt(0) + i)} ${16 + (i + 1) % 16}`)
      // console.log(`.define ${String.fromCharCode('a'.charCodeAt(0) + i)} [${i < 8 ? 'i' : 'm'}c] ${i % 8}`)
      let s = `.define ${String.fromCharCode('a'.charCodeAt(0) + i)}`.padEnd(11) + ` [ic] ${i}`
      // console.log(s)
      code_from_factasm += s + '\n'
    }
    s = `.define q [ic] 15
.define r [ic] 16
.define s [mc] 0`
    .split('\n').map(directive_space).join('\n')
    code_from_factasm += s + '\n'
    s = `##### macros #####
%_mov_    src, dst, const
  const   clear, dst
  _add_   src, dst, const
%
%_set_    const, dst
  const   clear, dst
  const   const, dst
%
%_trans_  A, B, reg_src, reg_dst, const
  cnop
  arith   A, [OR], 0, B, const, reg_src, reg_dst
%
%branch   label, signal_left, signal_operator, signal_right, register_read_condition
  cnop
  decid   signal_left, signal_operator, signal_right, [J],, register_read_condition, [jump], [J] ip + 2 - label
  nop
%
%_add_    src_wire, dst_wire, add_constants
  cnop
  arith   [each], [OR], 0, [each], add_constants, src_wire, dst_wire
%
%clear    dst
  const   clear, dst
%
##### factasm macros #####
%halt
  const   [J] 1, [jump]
  const   [J] 1, [jump]
%
%goto     label
  const   [J] ip + 2 - label, [jump]
  nop
%
%goto_r   reg
  _add_   reg, [jump], [J] 2
  nop
%
%goto_d   location
  mov_rd  q, location
  goto_r  q
%
%if       op1, comp, op2, label
  clear   s
  trans   s, op2
  _add_   op1, s
  cnop
  branch  label, [V], comp, [W], s
%
%op       dst, op1, operator, op2
  {trans   s, op2}
  _add_   op1, s
  nop
  const   clear, dst
  cnop
  arith   [V], operator, [W], [V],, s, dst
%
%op_rrc   dst, op1, operator, const_op2
  const   clear, dst
  cnop
  arith   [V], operator, [W], [V],, op1, dst, [W] const_op2
%
%add      dst, op1, op2
  _mov_   op1, dst
  _add_   op2, dst
%
%add_rrc  dst, src, const
  _mov_   src, dst, [V] const
%
%addeq    dst, src
  _add_   src, dst
%
%addeq_rc dst, const
  const   [V] const, dst
%
%mov      dst, src
  _mov_   src, dst
%
%mov_rr   dst, src
  mov     dst, src
%
%mov_rc   dst, const
  _set_   [V] const, dst
%
%mov_rd   dst, src
  _trans_ [V], memqsig, src, [memq]
  nop
  _mov_   [memr], dst
%
%mov_dr   dst, src
  _trans_ [V], memwsig, dst, [memw], clear
  const   clear, s
  _trans_ [V], memwsig, dst, s
  nop
  nop
  _add_   src + s, [memw]
%
%mov_dc   dst, const
  mov_rc  q, const
  mov_dr  dst, q
%
%mov_dd   dst, src
  mov_rd  q, src
  mov_dr  dst, q
%
%trans    dst, src
  _trans_ [V], [W], src, dst
%`.split('\n').map(q=>{
      let r = /( *)(\S+)( *)(.*)/.exec(q)
      if (!r || r[2][0] == '#') return q
      return (r[1].length ? ' '.repeat(4) : '')
           + (!r[4].length ? r[2] : r[2].padEnd(7 + (r[1].length ? 0 : 4)) + ' ' + r[4])
    }).join('\n')
    code_from_factasm += s + '\n'


    s = `##### generated macros #####`
    code_from_factasm += s + '\n'
    s = `# mov #`
    code_from_factasm += s + '\n'
    s = explode_with_splinters`mov_r${['c', 'd']} q, value
nop
mov_r${['d']} dst, q`
  // .filter(([_, freeze])=>freeze.slice(-1)[0] != 'r' && freeze[0] != 'r')
  .map(([str, freeze])=>{
    // console.log("str")
    // console.log(str)
    // console.log("freeze")
    // console.log(freeze)
    let dst = freeze.pop()
    freeze.unshift(dst)
    return `%mov_${freeze.join('')}`.padEnd(11) + ` dst, value
${str.split('\n').map(q=>{
        let r = /(\S+) (.*)/.exec(q)
        return r ? r[1].padEnd(7) + ' ' + r[2] : q
      }).map(q=>' '.repeat(4) + q).join('\n')}
%`
  }).join('\n')
    // code_from_factasm += s + '\n'

    s = `# op #`
    code_from_factasm += s + '\n'
    s = explode_with_splinters`mov_r${['c', 'd']} q, op1
mov_r${['c', 'd']} r, op2
nop
op q, q, operator, r
nop
mov_${['r', 'd']}r dst, q`
  // .filter(([_, freeze])=>freeze.slice(-1)[0] != 'r' && freeze[0] != 'r')
  .map(([str, freeze])=>{
    let dst = freeze.pop()
    freeze.unshift(dst)
    return `%op_${freeze.join('')}`.padEnd(11) + ` dst, op1, operator, op2
${str.split('\n').map(q=>{
        let r = /(\S+) (.*)/.exec(q)
        return r ? r[1].padEnd(7) + ' ' + r[2] : q
      }).map(q=>' '.repeat(4) + q).join('\n')}
%`
  }).join('\n')
    // code_from_factasm += s + '\n'

    s = `# if #`
    code_from_factasm += s + '\n'
    s = explode_with_splinters`mov_r${['c', 'r', 'd']} q, lhs
mov_r${['c', 'r', 'd']} r, rhs
nop
if q, comp, r, label`
  // .filter(([_, freeze])=>freeze.slice(-1)[0] != 'r' && freeze[0] != 'r')
  .map(([str, freeze])=>{
    return `%if_${freeze.join('')}`.padEnd(11) + ` lhs, comp, rhs, label
  ${str.split('\n').map(q=>{
        let r = /(\S+) (.*)/.exec(q)
        return r ? r[1].padEnd(7) + ' ' + r[2] : q
      }).map(q=>' '.repeat(4) + q).join('\n')}
  %`
  }).join('\n')
    // code_from_factasm += s + '\n'

  }
  return code_from_factasm
}

