import pako from 'https://deno.land/x/pako@v2.0.3/pako.js'

  // add     [red], [green], [blue] 1, memr, out
  // decid   [=], [black], 0, [everything] (1), [cyan] 1 [pink] 2 [yellow] 3 [everything] 4
  // const   [iron-plate] -1 [W] 4 [dot] [fluid=water]
  // const   ([A] 5 [B] 2 [C] 1) * ([A] 3 [B] 16) - 1

const ARITH = 'arith'
const DECID = 'decid'
const CONST = 'const2'
const NONE = 'const'
const NOP = 'nop'
const CNOP = 'cnop'
const VOID = 'void'
const value_keywords = 'ip'.split(' ')
const wire_keywords =  'in out memr memw memq jump'.split(' ')

//                             ,,
//   .g8"""bgd               `7MM
// .dP'     `M                 MM
// dM'       ` ,pW"Wq.    ,M""bMM  .gP"Ya
// MM         6W'   `Wb ,AP    MM ,M'   Yb
// MM.        8M     M8 8MI    MM 8M""""""
// `Mb.     ,'YA.   ,A9 `Mb    MM YM.    ,
//   `"bmmmd'  `Ybmd9'   `Wbmd"MML.`Mbmmd'



//                                ,...  ,...
//  .M"""bgd mm                 .d' "".d' ""
// ,MI    "Y MM                 dM`   dM`
// `MMb.   mmMMmm `7MM  `7MM   mMMmm mMMmm
//   `YMMNq. MM     MM    MM    MM    MM
// .     `MM MM     MM    MM    MM    MM
// Mb     dM MM     MM    MM    MM    MM
// P"Ybmmd"  `Mbmo  `Mbod"YML..JMML..JMML.



function explode(strs, ...alts) {
  return explode_with_splinters(strs, ...alts).map(([q, _])=>q)
}

function explode_with_splinters(strs, ...alts) {
  let list = []
  for (const splinter of combinatorial(...alts)) {
    let s = strs[0]
    for (let i = 0; i < splinter.length; ++i) {
      s += splinter[i] + strs[i + 1]
    }
    list.push([s, splinter])
  }
  return list
}

function* combinatorial(...alts) {
  // console.log('combinatorial', ...alts)
  if (!alts.length) {
    yield []
    return
  }
  for (let v of alts[0]) {
    for (let freeze of combinatorial(...alts.slice(1))) {
      yield [v, ...freeze]
    }
  }
}

function inspect(s) {
  return JSON.stringify(s, null, 2)
}

function print(name, str) {
  console.log(name, str)
  if (0)
  fs.mkdir('./asm_out', err=>{
    if (!err || err.code == 'EEXIST') {
      fs.writeFile('./asm_out/'+name, str, err=>{})
    }
  })
}

function deepcopy(obj) {
  return JSON.parse(JSON.stringify(obj))
}

//                                                ,,
// MMP""MM""YMM    `7MM                           db
// P'   MM   `7      MM
//      MM  ,pW"Wq.  MM  ,MP'.gP"Ya `7MMpMMMb.  `7MM  M"""MMV .gP"Ya
//      MM 6W'   `Wb MM ;Y  ,M'   Yb  MM    MM    MM  '  AMV ,M'   Yb
//      MM 8M     M8 MM;Mm  8M""""""  MM    MM    MM    AMV  8M""""""
//      MM YA.   ,A9 MM `Mb.YM.    ,  MM    MM    MM   AMV  ,YM.    ,
//    .JMML.`Ybmd9'.JMML. YA.`Mbmmd'.JMML  JMML..JMML.AMMmmmM `Mbmmd'


function tokenize(code) {
  let c = 0
  let line = 1
  let column = 1
  let tokens = []

  function tokenize_signal() {
    let i = 1
    for (; c + i < code.length && /[^\n\]\.]/.test(code[c + i]); ++i) {}
    if (c + i == code.length || code[c + i] != ']') {
      return {token: 'TOKEN_ERROR', line, column: column + i}
    }
    ++i
    return ({token: 'signal', string: code.slice(c + 1, c + i - 1)})
  }

  function tokenize_identifier(token_type) {
    let i = 1
    for (; c + i < code.length && /\w/.test(code[c + i]); ++i) {}
    return ({token: token_type, string: code.slice(c, c + i)})
  }

  for (c = 0; c < code.length;) {
    let chr = code[c]
    if ([' ', '\t'].includes(chr)) {
      ++c
      ++column
      continue;
    }
    if ('\n' == chr) {
      let token = {token: 'EOL', line, column}
      tokens.push(token)
      column = 1
      ++line
      ++c
      continue;
    }
    if (/[_a-zA-Z0-9]/.test(chr)) {
      let token = tokenize_identifier(/[0-9]/.test(chr) ? 'number' : 'identifier')
      if (token.token == 'number') {
        token.number = Number(token.string)
      }
      token.line = line
      token.column = column
      c      += token.string.length
      column += token.string.length
      tokens.push(token)
      continue;
    }
    if ('[' == chr) {
      let token = tokenize_signal()
      if (token.token == 'TOKEN_ERROR') return [token]
      token.line = line
      token.column = column
      c      += token.string.length + 2
      column += token.string.length + 2
      tokens.push(token)
      continue;
    }
    if ('#' == chr) {
      for (++c, ++column; c < code.length && code[c] != '\n'; ++c, ++column) {}
      continue;
    }
    let single = '.:,%+-*/&|^(){}'.split('').includes(chr)
    if (single) {
      let token = {token: chr, line, column}
      tokens.push(token)
      ++c
      ++column
      continue;
    }
    let token = {token: 'TOKEN_ERROR', string: chr, line, column}
    return [token]
  }
  let token = {token: 'EOL', line, column}
  tokens.push(token)
  return tokens
}



// `7MM"""Mq.
//   MM   `MM.
//   MM   ,M9 ,6"Yb.  `7Mb,od8 ,pP"Ybd  .gP"Ya
//   MMmmdM9 8)   MM    MM' "' 8I   `" ,M'   Yb
//   MM       ,pm9MM    MM     `YMMMa. 8M""""""
//   MM      8M   MM    MM     L.   I8 YM.    ,
// .JMML.    `Moo9^Yo..JMML.   M9mmmP'  `Mbmmd'



function parse(tokens) {
  let parse_tree = []
  let t = 0
  let bracket_depth = 0

  function peek() {
    if (t >= tokens) {
      throw new Error(`peek() called expecting a token but found EOF`)
    } else return tokens[t].token
  }

  function eat(type, keyword) {
    if (tokens[t].token !== type) throw new Error(`eat() called with type '${type}' but found token with type '${tokens[t].token}' L:${tokens[t].line} C:${tokens[t].column}`, {cause: {function: 'eat', type, token: tokens[t]}})
    if (keyword !== undefined && tokens[t].string !== keyword) throw new Error(`eat() expected keyword '${keyword}' but found '${tokens[t].string}' L:${tokens[t].line} C:${tokens[t].column}`, {cause: {function: 'eat', type, keyword, token: tokens[t]}})
    let token = tokens[t]
    ++t
    // console.log(token)
    return token
  }

  function fail(type) {
    if (tokens[t].token == type) throw new Error(`fail() called with type '${type}' but token with type '${tokens[t].token} matched anyways L:${tokens[t].line} C:${tokens[t].column}'`, {cause: {function: 'fail', type, token: tokens[t]}})
  }

  function parse_macro() {
    let lc = eat('%')
    let macro = eat('identifier')
    let parameters = parse_list(()=>eat('identifier'))
    eat('EOL')
    let brace_counter = 0
    let operations = []
    while (peek() != '%') {
      if (peek() == 'EOL') {
        eat('EOL')
        continue;
      }
      if (peek() == '{') {
        ++brace_counter
        operations.push(eat('{'))
        continue;
      }
      if (peek() == '}') {
        while (peek() == '}') {
          --brace_counter
          let bracket = eat('}')
          operations.push(bracket)
          if (brace_counter < 0)
            throw new Error(`Closing bracket without matching opening bracket encountered L:${bracket.line} C:${bracket.column}`, {cause: bracket})
        }
        eat('EOL')
        continue;
      }
      let operation = parse_operation()
      operations.push(operation)
    }
    let pct_token = eat('%')
    if (brace_counter > 0) throw new Error(`Macro ended with brackets left opened L:${pct_token.line} C:${pct_token.column}`, {cause: pct_token})
    eat('EOL')
    return {node: 'macro', macro, parameters, operations, lc: [lc.line, lc.column]}
  }


  function parse_name_and_numerical_expr() {
    let name = eat('identifier')
    let value
    if (peek() != ',' && peek() != 'EOL')
    value = parse_expression(false)
    let lc = name
    return {node: 'ident_numexpr_pair', name, value, lc: [lc.line, lc.column]}
  }

  function parse_directive() {
    let lc = eat('.')
    let directive = eat('identifier')
    if (directive.string == 'global') {
      let globals = parse_list(parse_name_and_numerical_expr)
      return {node: 'directive', directive, globals, lc: [lc.line, lc.column]}
    }
    if (directive.string == 'rom') {
      let start = parse_expression(false)
      eat(',')
      let rom = parse_list(parse_expression)
      return {node: 'directive', directive, start, rom, lc: [lc.line, lc.column]}
    }
    if (directive.string == 'define') {
      let name = eat('identifier')
      let value = parse_expression()
      return {node: 'directive', directive, name, value, lc: [lc.line, lc.column]}
    }
    throw new Error(`Syntax error, invalid directive keyword '${directive.string}' at L:${directive.line} C:${directive.column}`, {cause: directive})
  }

  function parse_label() {
    let lc = eat(':')
    let label
    label = eat('identifier')
    return {node: 'label', label, lc: [lc.line, lc.column]}
  }

  function parse_macro_parameter() {
    eat(':')
    let parameter = eat('number')
    return {node: 'parameter', parameter, lc: [lc.line, lc.column]}
  }

  function parse_expression(signals_allowed = true) {
    let expression = []

    let token_types = 'identifier number : + - * / % & ^ | ('.split(' ')
    if (signals_allowed) token_types.push('signal')

    let p
    while (token_types.includes(p = peek())) {
      if (p == ':') {
        expression.push(parse_macro_parameter())
      } else if (p == '(') {
        eat('(')
        expression.push(parse_expression(signals_allowed))
        eat(')')
      } else if (p == 'signal') {
        expression.push(parse_signals())
      } else expression.push(eat(p))
    }
    return expression
  }

  function parse_signal() {
    let name = eat('signal')
    let value = parse_expression(false)
    let lc = name
    return {node: 'signal', name, value, lc: [lc.line, lc.column]}
  }

  function parse_signals() {
    let signals = []
    while (![',', 'EOL', ')', '}'].includes(peek())) {
      let signal = parse_signal()
      signals.push(signal)
    }
    return {node: 'signals', signals}
  }

  function parse_operand() {
    if (peek() == 'signal') return parse_signals()
    return parse_expression()
  }

  function parse_list(parse_item) {
    let list = []
    while (!['EOL', '}'].includes(peek())) {
      let item = parse_item()
      list.push(item)
      if (peek() == ',') {
        eat(',')
        // fail('EOL')
      }
    }
    // eat('EOL')
    return list
  }

  function parse_operation() {
    // console.log('parse_operation()')
    let operator = eat('identifier')
    let operands = parse_list(parse_operand)
    let lc = operator
    return {node: 'operation', operator, operands, lc: [lc.line, lc.column]}
  }

  function parse_label_definition() {
    let node = parse_label()
    eat('EOL')
    return node
  }

  for (; t < tokens.length;) {
    if (peek() == 'identifier') {
      let node = parse_operation()
      parse_tree.push(node)
      while (peek() == '}') {
        parse_tree.push(eat('}'))
      }
      eat('EOL')
      continue;
    }
    if (peek() == ':') {
      let node = parse_label_definition()
      parse_tree.push(node)
      continue;
    }
    if (peek() == '%') {
      let node = parse_macro()
      parse_tree.push(node)
      continue;
    }
    if (peek() == '.') {
      let node = parse_directive()
      parse_tree.push(node)
      continue;
    }
    if (peek() == '{') {
      let node = eat('{')
      parse_tree.push(node)
      continue;
    }
    if (peek() == '}') {
      while (peek() == '}') {
        parse_tree.push(eat('}'))
      }
      eat('EOL')
      continue;
    }
    if (peek() == 'EOL') {
      eat('EOL')
      continue;
    }
    throw new Error(`Syntax error, wrong token type '${tokens[t].token}' at L:${tokens[t].line} C:${tokens[t].column}`, {cause: tokens[t]})
  }
  return {node: 'parse_tree', parse_tree}
}


//                                                         ,,        ,,
//       db                                               *MM      `7MM
//      ;MM:                                               MM        MM
//     ,V^MM.    ,pP"Ybd ,pP"Ybd  .gP"Ya `7MMpMMMb.pMMMb.  MM,dMMb.  MM  .gP"Ya
//    ,M  `MM    8I   `" 8I   `" ,M'   Yb  MM    MM    MM  MM    `Mb MM ,M'   Yb
//    AbmmmqMA   `YMMMa. `YMMMa. 8M""""""  MM    MM    MM  MM     M8 MM 8M""""""
//   A'     VML  L.   I8 L.   I8 YM.    ,  MM    MM    MM  MM.   ,M9 MM YM.    ,
// .AMA.   .AMMA.M9mmmP' M9mmmP'  `Mbmmd'.JMML  JMML  JMML.P^YbmdP'.JMML.`Mbmmd'

function inout_params(operation) {
  switch (operation.operator.string) {
  case ARITH: // fall through
  case DECID:
    return {in: 5, out: 6, pre: 7}
  case CONST:
    return {out: 2}
  case NONE:
    return {out: 1}
  default:
    return {}
  }
}

function mapify_signals(signals_node, context) {
  let m = new Map()
  if (signals_node == 0) return m
  if (signals_node.node != 'signals') throw new Error(`Can't make a signals map of something that isn't a signals node, signals_node: ${signals_node}`)
  for (let signal of signals_node.signals) {
    m.set(signal.name.string, resolve_expression(signal.value, context))
  }
  return m
}
function mapify_signals_expr(expr, context) {
  return mapify_signals(resolve_expression(expr, context), context)
}

function assemble(parse_tree) {
  let pt = parse_tree.parse_tree
  let globals_size = new Map()
  let macros = new Map()
  let defines = new Map()
  let rom_nodes = []

  for (let i = 0; i < pt.length; ++i) {
    let node = pt[i]
    if (node.node == 'macro') {
      macros.set(node.macro.string, node)
    }
  }

  for (let [name, macro] of macros.entries()) {
    // TODO prevent recursion
  }

  let addressed_units = []

  function push_macro(node, macro_lc) {
    // console.log(inspect({push_macro: node}))
    let macro = macros.get(node.operator.string)
    for (let op of macro.operations) {
      push_operation(op, macro_lc, node.operands, macro.parameters)
    }
  }

  function push_expression(expr, macro_lc, macro_args, parameters) {
    // console.log('push_expression()', inspect({expr, macro_args}))
    // console.log()
    if (expr.node == 'signals') {
      for (const signal of expr.signals) {
        push_expression(signal.value, macro_lc, macro_args, parameters)
      }
    } else {
      for (let i = 0; i < expr.length; ++i) {
        let el = expr[i]
        let idx
        if (el.node == 'parameter') {
          let n = el.parameter.number
          expr[i] = macro_args[n]
        } else if (parameters && el.token == 'identifier' && -1 != (idx = parameters.map(q=>q.string).indexOf(el.string))) {
          expr[i] = macro_args[idx]
        } else if (el.node == 'signals') {
          push_expression(el, macro_lc, macro_args, parameters)
        } else if (Array.isArray(el)) {
          push_expression(el, macro_lc, macro_args, parameters)
        }
      }
    }
  }

  function push_operation(node, macro_lc = [], macro_args, parameters) {
    if (macro_args !== undefined) {
      if (node.node == 'label') throw new Error(`Found illegal label definition '${node.label.string}' inside macro  L:${node.line} C:${node.column}`)
      node = deepcopy(node)
      for (let j = 0; node.operands != undefined && j < node.operands.length; ++j) {
        let operand = node.operands[j]
        push_expression(operand, [...macro_lc, node.lc], macro_args, parameters)
      }
    }
    if (macros.has(node.operator?.string)) {
      // push_macro(node, [...macro_lc, node.lc])
      push_macro(node, [...macro_lc, [...node.lc, node.operator.string]])
    } else {
      // node.lc_macros = [...macro_lc, node.lc]
      if (node.node) node.lc_macros = [...macro_lc, [...node.lc, node.operator.string]]
      addressed_units.push(node)
    }
  }


  for (let i = 0; i < pt.length; ++i) {
    let node = pt[i]
    if (['label'].includes(node.node)) {
      addressed_units.push(node)
    } else if (['{', '}'].includes(node.token)) {
      addressed_units.push(node)
    } else if (node.node == 'directive') {
      if (node.directive.string == 'global') {
        node.globals.forEach(g=>{
          if (!value_keywords.includes(g.name.string)) {
            globals_size.set(g.name.string, g.value)
          } else {
            throw new Error(`Value keyword '${g.name.string}' is not allowed as global L:${g.name.line} C:${g.name.column}`)
          }
        })
      } else if (node.directive.string == 'rom') {
        rom_nodes.push(node)
      } else if (node.directive.string == 'define') {
        if (!value_keywords.includes(node.name.string)) {
          defines.set(node.name.string, node.value)
        } else {
          throw new Error(`Value keyword '${g.name.string}' is not allowed as defined expression identifier L:${g.name.line} C:${g.name.column}`)
        }
      }
    } else if (node.node == 'operation') {
      push_operation(node)
    }
  }

  // let connections = addressed_units.map(operation=>{
  //   let inout = inout_params(operation)

  // })


  let globals_address = new Map()
  let address = 0
  for (const [name, size] of globals_size) {
    globals_address.set(name, address)
    let resolved_size = size === undefined ? 1 : resolve_expression(size, {defines})
    if (!Number.isInteger(resolved_size)) throw new Error(`Int expected in global '${name}' size definition, but recieved another type.`)
    address += resolved_size
  }
  const mem_size = address


  let context = {
    globals_address,
    defines,
  }

  let config = {
    clear: {type: 'virtual', name: 'signal-white'},
    ipsig: {type: 'virtual', name: 'signal-black'},
    jumpsig: {type: 'virtual', name: 'signal-J'},
    memqsig: {type: 'virtual', name: 'signal-green'},
    memwsig: {type: 'virtual', name: 'signal-red'},
  }
  for (let k in config) {
    if (defines.has(k)) {
      let signals = resolve_expression(defines.get(k), context)
      config[k] = decode_rich_text_token(signals.signals[0].name)
    }
  }


  let operations = addressed_units.filter(q=>q.node == 'operation')
  for (let op of operations) {
    let io = inout_params(op)
    if (io.in != null) op.in = mapify_signals_expr(op.operands[io.in], context)
    if (io.out != null) op.out = mapify_signals_expr(op.operands[io.out], context)
    // if (op.operator.string == 'decid') {
    //   console.log(inspect({io, in: op.operands[io.in], out: op.operands[io.out]}))
    //   console.log(inspect(op))
    // }
  }

  let reg_delay = 2
  function assign_address(addressed_units) {
    let address_map = new Map()
    let labels = new Map()
    let iptr_stack = []
    let address = 2
    let cnop_struct
    for (let i = 0; i < addressed_units.length; ++i) {
      let node = addressed_units[i]
      if (node.token == '{') {
        iptr_stack.push(address)
      }
      if (node.token == '}') {
        if (iptr_stack.length) address = iptr_stack.pop()
        else throw new Error(`Closing bracket '${node.node}' found with no matching opening bracket L:${node.line} C:${node.column}`)
      }
      if (node.node == 'label') {
        if (!value_keywords.includes(node.label.string))
          labels.set(node.label.string, address)
        else
          throw new Error(`Value keyword '${node.label.string}' is not allowed as label L:${node.label.line} C:${node.label.column}`)
        continue;
      }
      if (node.node == 'operation') {
        node.address = address
        if (!address_map.has(address)) address_map.set(address, [])
        address_map.get(address).push({node, i})
        if (node.operator.string == NOP) {
          if (node.operands.length) {
            let steps = resolve_expression(node.operands, context)
            address += steps
            continue
          }
        } else if (CNOP == node.operator.string) {
          if (!cnop_struct) {
            cnop_struct = {node, address, index: i}
          }
          continue
        } else if (VOID == node.operator.string) continue
        ++address
        continue;
      }
    }
    if (iptr_stack.length)
      throw new Error(`Program ended with open brackets, missing closing bracket`)
    return [labels, address_map, cnop_struct]
  }
  function cnop_resolve(address_map, cnop_struct) {
    let {node: cnop, address, index} = cnop_struct
    let did_it = false
    for (let dist = 0; dist <= reg_delay; ++dist) {
      for (let s = 0; s <= dist; ++s) {
        let start = address - s
        let end = start + dist
        for (let before of address_map.get(start) ?? []) {
          if (before.i >= index) continue
          for (let after of address_map.get(end) ?? []) {
            if (after.i < index) continue
            for (let c of ['ic', 'mc']) {
              if (before.node.out?.has(c)
                && after.node.in?.has(c)
                && before.node.out.get(c)
                == after.node.in.get(c)
              ) {
                cnop.operands[0] = reg_delay - (dist - 1)
                did_it = true
                break
              }
            }
            if (did_it) break
          }
          if (did_it) break
        }
        if (did_it) break
      }
      if (did_it) break
    }
    // if (!did_it) cnop.operator.string = VOID
    cnop.operator.string = NOP
    if (!did_it) cnop.operands[0] = 0
    else console.log(cnop.operands[0], cnop.lc_macros)
  }

  let [labels, address_map, cnop_struct] = assign_address(addressed_units)
  while (cnop_struct) {
    cnop_resolve(address_map, cnop_struct)
    ;[labels, address_map, cnop_struct] = assign_address(addressed_units)
  }

  context.labels = labels

  let rom = new Map()
  for (const r of rom_nodes) {
    let start = resolve_expression(r.start, context)
    for (let i = 0; i < r.rom.length; ++i) {
      let v = resolve_expression(r.rom[i], context)
      rom.set(start + i, v)
    }
  }

  context.dynamic = new Map()

  return {operations, defines, mem_size, rom, config, context}
}


//                                      ,,
// `7MM"""Mq.                         `7MM
//   MM   `MM.                          MM
//   MM   ,M9  .gP"Ya `7MMpMMMb.   ,M""bMM  .gP"Ya `7Mb,od8
//   MMmmdM9  ,M'   Yb  MM    MM ,AP    MM ,M'   Yb  MM' "'
//   MM  YM.  8M""""""  MM    MM 8MI    MM 8M""""""  MM
//   MM   `Mb.YM.    ,  MM    MM `Mb    MM YM.    ,  MM
// .JMML. .JMM.`Mbmmd'.JMML  JMML.`Wbmd"MML.`Mbmmd'.JMML.



function render_expanded(assembled) {
  let defines_kvs = []
  for (let kv of assembled.defines.entries()) defines_kvs.push(kv)
  for (let kv of assembled.context.labels.entries()) defines_kvs.push(kv)

  let defines = defines_kvs.map(([k, v])=>`.define ${k} ${opand_render(v, true)}`).join('\n')

  let ops = assembled.operations.map(op=>{
    if (op.node != "operation") return "default_string :("
    return `${' '.repeat(4)}${op?.operator?.string} ${
      op?.operands?.map(opand=>opand_render(opand, true)).join(', ')
    }`.padEnd(80, ' ')
      + `# ip:${(''+op.address).padStart(5, ' ')}, line: ${op.lc_macros.map(([l,c,m])=>(''+l).padStart(4, ' ')).join(' ')}`
  }).join('\n')

  let o = []
  if (defines != '') o.push(defines)
  if (ops != '') o.push(ops)
  return o.join('\n')

  function opand_render(opand, skip_parens) {
    if (Array.isArray(opand)) {
      if (opand.length == 0) return ''
      if (opand.length == 1) return opand_render(opand[0])
      let s = opand.map(opand_render).join(' ')
      if (skip_parens) return s
      return '(' + s + ')'
    }

    if (opand === undefined) return ''
    if (typeof opand == 'number') return opand
    if (opand.node == 'signals') return signals_render(opand.signals)
    if (opand.token == 'identifier') return opand.string
    if (opand.token == 'number') return opand.string
    return opand.token
  }

  function signals_render(signals) {
    return signals.map(signal=>signal_render(signal)).join(' ')
  }

  function signal_render(signal) {
    let s = `[${signal.name.string}]`
    let s2 = opand_render(signal.value)
    if (s2 == '') return s
    return `${s} ${s2}`
  }
}



//              ,,                                         ,,
// `7MM"""Yp, `7MM                                         db              mm
//   MM    Yb   MM                                                         MM
//   MM    dP   MM `7MM  `7MM  .gP"Ya `7MMpdMAo.`7Mb,od8 `7MM  `7MMpMMMb.mmMMmm
//   MM"""bg.   MM   MM    MM ,M'   Yb  MM   `Wb  MM' "'   MM    MM    MM  MM
//   MM    `Y   MM   MM    MM 8M""""""  MM    M8  MM       MM    MM    MM  MM
//   MM    ,9   MM   MM    MM YM.    ,  MM   ,AP  MM       MM    MM    MM  MM
// .JMMmmmd9  .JMML. `Mbod"YML.`Mbmmd'  MMbmmd' .JMML.   .JMML..JMML  JMML.`Mbmo
//                                      MM
//                                    .JMML.

/*
  connect() references the actual entity instead of writing the entity_number
    at the connection definitions. This means entities can be connected before
    they have an entity_number. These entity references need to be replaced with
    entity_number later.
*/

function connect(wire_color, entity0, entity1, connection0, connection1) {
  // console.log('connect()', {entity0, entity1})
  let multi_connection_entity = ['arithmetic-combinator', 'decider-combinator']
  if (connection0 === undefined && multi_connection_entity.includes(entity0.name)) connection0 = 2
  if (connection1 === undefined && multi_connection_entity.includes(entity1.name)) connection1 = 1

  let entities = [entity0, entity1]
  let connections = [connection0, connection1]
  for (let i = 0; i < 1; ++i) {
    let o = 1 - i
    let ent = entities[i]
    let other = entities[o]
    ent.connections = ent.connections || {}
    let c     = connections[i] !== undefined ? connections[i] : 1
    let c_oth = connections[o] !== undefined ? connections[o] : 1
    ent.connections[c] = ent.connections[c] || {}
    ent.connections[c][wire_color] = ent.connections[c][wire_color] || []
    let wire = ent.connections[c][wire_color]
    let connection = {entity_id: other}
    if (connections[o] || multi_connection_entity.includes(other.name)) {
      connection.circuit_id = connections[o]
    }
    wire.push(connection)
  }
}

function electric_wire(entity0, entity1) {
  entity0.neighbours = entity0.neighbours || []
  entity1.neighbours = entity1.neighbours || []
  entity0.neighbours.push(entity1)
  entity1.neighbours.push(entity0)
}

let number_ops = {
  '~': (_, b)=>~b,
  '+': (a, b)=>a + b,
  '-': (a, b)=>a - b,
  '*': (a, b)=>a * b,
  '/': (a, b)=>a / b,
  '%': (a, b)=>a % b,
  '|': (a, b)=>a | b,
  '&': (a, b)=>a & b,
  '^': (a, b)=>a ^ b,
}

let unary_op = '+ - ~'.split(' ')

let prio_to_ops = new Map()
let i_prio = 0
prio_to_ops.set(++i_prio, '|'.split(''))
prio_to_ops.set(++i_prio, '^'.split(''))
prio_to_ops.set(++i_prio, '&'.split(''))
prio_to_ops.set(++i_prio, '~-+'.split(''))
prio_to_ops.set(++i_prio, '*/%'.split(''))
let prio_of = new Map()
for (const [prio, ops] of prio_to_ops.entries()) {
  for (let op of ops) {
    prio_of.set(op, prio)
  }
}

function value_ops(op, a, b, context) {
  // console.log('value_ops()', inspect({op, a, b}))
  if (Number.isInteger(a) && Number.isInteger(b)) return number_ops[op](a, b)
  let o = {node: 'signals', signals: []}
  const all_names = new Set()
  if (!Number.isInteger(a)) for (const signal of a.signals) all_names.add(signal.name.string)
  if (!Number.isInteger(b)) for (const signal of b.signals) all_names.add(signal.name.string)
  for (const n of all_names) {
    let an = 0
    if (Number.isInteger(a)) an = a
    else
      for (let signal of a.signals)
        if (signal.name.string == n)
          an = resolve_expression(signal.value, context)
    let bn = 0
    if (Number.isInteger(b)) bn = b
    else
      for (let signal of b.signals)
        if (signal.name.string == n)
          bn = resolve_expression(signal.value, context)
    let value = {token: 'number', number: number_ops[op](an, bn)}
    o.signals.push({node: 'signal', name: {token: 'signal', string: n}, value})
  }
  return o
}

function resolve_global(identifier, context) {
  // console.log('resolve_global()', inspect({identifier, context}))
  for (const n in context) {
    if (context[n].has(identifier.string)) return context[n].get(identifier.string)
  }
  throw new Error(`Identifier '${identifier.string}' with no value used L:${identifier.line} C:${identifier.column}`)
}

function resolve_expression(expr, context) {
  let v = _resolve_expression(expr, context)
  // console.log('v', inspect(v))
  if (typeof v == 'number') return v & 0xFFFFFFFF
  return v
}

function _resolve_expression(expr, context) {
  // console.log('resolve_expression()', context && context.dynamic, inspect(expr))
  if (!Array.isArray(expr)) {
    if (expr === undefined) return 0 // for when using argument that wasn't defined // TODO make sure this doesn't cause other problems and is the correct way to handle empty args
    if (typeof expr == 'number') return expr
    if (expr.token == 'number') return expr.number
    if (expr.token == 'identifier') return resolve_expression(resolve_global(expr, context), context)
    if (expr.node == 'signals') {
      // TODO resolve expressions here?
      // for (const signal of expr.signals) {
      //   signal.resolved_value = resolve_expression(signal.value, context)
      // }
      // console.log('expr', inspect(expr))
      return expr
    }
    throw new Error(`resolve_expression with non-Array expr, wrong type '${inspect(expr)}'`)
  }

  if (expr.length == 0) return 0


  if (expr.length == 1) return resolve_expression(expr[0], context)
  if (expr.length == 2 && unary_op.includes(expr[0].token))
    return value_ops(expr[0].token, 0, resolve_expression(expr[1], context), context)
  if (expr.length == 3 && prio_of.has(expr[1].token))
    return value_ops(expr[1].token, resolve_expression(expr[0], context), resolve_expression(expr[2], context), context)

  if (expr.length >= 4) {
    let i = 0
    while (typeof expr[i] == 'object' && unary_op.includes(expr[i].token)) ++i
    if (i) {
      if (i == expr.length)
        throw new Error(`Expression with only unary operators with no value is not allowed`)
      expr = [...expr]
      expr.splice(i - 1, 2, resolve_expression(expr.slice(i - 1, i + 1), context))
      return resolve_expression(expr, context)
    }

    let top_prio_index
    for (let i = 0; i < expr.length; ++i) {
      let op = expr[i].token
      let current = prio_of.get(op)
      let top = prio_of.get(expr[top_prio_index]?.token)
      // '^' is the only right associative op and it's top priority (of the 2 param ops), so we can just check if op == '^' first
      if (prio_of.has(op) && (top_prio_index === undefined || current > top)) {
        top_prio_index = i
      }
    }
    if (top_prio_index === undefined)
      throw new Error(`No operator found in expression when resolving`)
    if (top_prio_index == expr.length - 1)
      throw new Error(`Operator at end of expression`)

    let first_resolve = resolve_expression(expr.slice(top_prio_index - 1, top_prio_index + 2), context)
    expr = [...expr]
    expr.splice(top_prio_index - 1, 3, first_resolve)
    let full_resolve = resolve_expression(expr, context)
    return full_resolve
  }

  throw new Error(`Expression format not supported for now. Use parenthesis to decide order of operations.`)
}

function decode_rich_text_token(signal) {
  // console.log('decode_rich_text_token()', inspect(signal))

  let s = typeof signal == 'string' ? signal : signal.string

  // if (['ic'].includes(s)) {
  //   throw new Error('awwwww')
  // }

  let expanded_string = s

  let vcheck = /^everything|anything|each|[0-9A-Z]|red|green|blue|yellow|pink|cyan|white|grey|black|check|info|dot$/
  if (vcheck.test(s)) {
    expanded_string = 'virtual-signal=' + 'signal-' + s
  }

  let position = expanded_string.search(/=/)
  if (position == -1) {
    expanded_string = 'item=' + expanded_string
    position = expanded_string.search(/=/)
  }

  s = expanded_string

  let type = s.substring(0, position)

  if (type == 'virtual-signal') type = 'virtual'
  let name = s.substring(position + 1)
  return {type, name}
}

function assign_entity_numbers(entities) {
  for (let i = 0; i < entities.length; ++i) {
    entities[i].entity_number = i + 1
  }
}

function finalize_connections(entities) {
  for (let i = 0; i < entities.length; ++i) {
    if (entities[i].connections) {
      for (let connection_number in entities[i].connections) {
        let connection = entities[i].connections[connection_number]
        for (let color in connection) {
          for (let wire of connection[color]) {
            wire.entity_id = wire.entity_id.entity_number
            // if (wire.circuit_id) wire.circuit_id = wire.circuit_id.entity_number
          }
        }
      }
    }
    if (entities[i].neighbours) {
      let neighbours = entities[i].neighbours
      for (let j = 0; j < neighbours.length; ++j) {
        neighbours[j] = neighbours[j].entity_number
      }
    }
  }
}

const flip = {red: 'green', green: 'red'}
const R_BUS_COLOR = 'red'
const W_BUS_COLOR = R_BUS_COLOR // operation connect assumes (R == W == J)
const J_BUS_COLOR = W_BUS_COLOR
const Q_BUS_COLOR = flip[W_BUS_COLOR]
const IP_BUS_COLOR = Q_BUS_COLOR // should be free to switch with proper IP?
const IN_BUS_COLOR = flip[R_BUS_COLOR] // operation connect assumes these are different
const OUT_BUS_COLOR = flip[J_BUS_COLOR] // operation connect assumes  (OUT == Q) => (W == J)



//   ,,                                 ,,    ,,
//   db             mm                `7MM    db
//                  MM                  MM
// `7MM `7MMpdMAo.mmMMmm `7Mb,od8       MM  `7MM  `7MMpMMMb.  .gP"Ya
//   MM   MM   `Wb  MM     MM' "'       MM    MM    MM    MM ,M'   Yb
//   MM   MM    M8  MM     MM           MM    MM    MM    MM 8M""""""
//   MM   MM   ,AP  MM     MM           MM    MM    MM    MM YM.    ,
// .JMML. MMbmmd'   `Mbmo.JMML.       .JMML..JMML..JMML  JMML.`Mbmmd'
//        MM
//      .JMML.


function generate_ip(config) {
  let line = {
    // pushbutton: 'pushbutton',
    pulse_starter: 'constant-combinator',
    pulse_converter: 'arithmetic-combinator',
    pulse_generator: 'decider-combinator',
    nl0: 'newline',
    pulse_extender: {name: 'decider-combinator', direction: 6},
    nl1: 'newline',
    reset_neg_b: 'arithmetic-combinator',
    reset_neg_black: 'arithmetic-combinator',
    nl2: 'newline',
    converter: 'arithmetic-combinator',
    incrementer: 'constant-combinator',
    cell: 'arithmetic-combinator',
  }
  for (let k in line) {
    if (typeof line[k] == 'string') line[k] = {name: line[k]}
  }
  if (line.pulse_starter) {
    line.pulse_starter.control_behavior = {filters: [{
      signal: {type: 'virtual', name: 'signal-dot'},
      count: 1,
      index: 1
    }]}
    line.pulse_starter.direction = 2
  }
  if (line.pushbutton) {
    line.pushbutton.control_behavior = line.pulse_starter.control_behavior
    connect('red', line.pushbutton, line.pulse_starter)
  }
  if (line.pulse_converter) {
    line.pulse_converter.control_behavior = {
      arithmetic_conditions: {
        first_signal: {type: 'virtual', name: 'signal-dot'},
        second_constant: 0,
        output_signal: {type: 'virtual', name: 'signal-cyan'},
        operation: 'OR',
      }
    }
  }
  if (line.pulse_generator) {
    line.pulse_generator.control_behavior = {
      decider_conditions: {
        first_signal: {type: 'virtual', name: 'signal-dot'},
        second_signal: {type: 'virtual', name: 'signal-cyan'},
        output_signal: config.clear,
        comparator: '≠',
        copy_count_from_input: false,
      }
    }
  }
  if (line.pulse_extender) {
    line.pulse_extender.control_behavior = {
      decider_conditions: {
        first_signal: {type: 'virtual', name: 'signal-each'},
        constant: 0,
        output_signal: {type: 'virtual', name: 'signal-each'},
        comparator: '≠',
        copy_count_from_input: false,
      }
    }
  }
  if (line.pulse_extender1) {
    line.pulse_extender1.control_behavior = line.pulse_extender.control_behavior
  }
  if (line.converter) {
    line.converter.control_behavior = {
      arithmetic_conditions: {
        first_signal: config.clear,
        second_constant: -1,
        output_signal: config.clear,
        operation: '*',
      }
    }
  }
  if (line.incrementer) {
    line.incrementer.control_behavior = {filters: [{
      signal: config.ipsig,
      count: -1,
      index: 1
    }]}
    line.incrementer.direction = 2
  }
  if (line.cell) {
    // line.cell.control_behavior = {
    //   decider_conditions: {
    //     first_signal: {type: 'virtual', name: 'signal-white'},
    //     constant: 0,
    //     output_signal: {type: 'virtual', name: 'signal-everything'},
    //     comparator: '=',
    //   }
    // }
    line.cell.control_behavior = {
      arithmetic_conditions: {
        first_signal: config.jumpsig,
        second_signal: config.ipsig,
        output_signal: config.ipsig,
        operation: '+',
      }
    }
  }
  if (line.reset_neg_b) {
    line.reset_neg_b.control_behavior = {
      arithmetic_conditions: {
        first_signal: config.jumpsig,
        second_signal: config.clear,
        output_signal: config.ipsig,
        operation: '*',
      }
    }
  }
  if (line.reset_neg_black) {
    line.reset_neg_black.control_behavior = {
      arithmetic_conditions: {
        first_signal: config.ipsig,
        second_signal: config.clear,
        output_signal: config.ipsig,
        operation: '*',
      }
    }
  }

  connect('red', line.pulse_starter, line.pulse_converter)
  connect('green', line.pulse_starter, line.pulse_generator)
  connect('red', line.pulse_converter, line.pulse_generator)
  connect('red', line.pulse_generator, line.pulse_extender)
  connect('green', line.pulse_generator, line.pulse_extender, 2, 2)
  if (line.pulse_extender1) {
    connect('green', line.pulse_extender, line.pulse_extender1, 2, 2)
    connect('green', line.pulse_extender1, line.converter)
    connect('red', line.pulse_extender, line.pulse_extender1)
  } else {
    connect('green', line.pulse_extender, line.converter)
  }
  connect('green', line.converter, line.reset_neg_b)
  connect('green', line.reset_neg_b, line.reset_neg_black, 1, 1)
  connect('green', line.reset_neg_black, line.cell)
  connect('green', line.reset_neg_black, line.reset_neg_b, 2, 2)
  connect('green', line.incrementer, line.cell)
  connect('green', line.converter, line.incrementer)
  connect('red', line.cell, line.cell)
  connect('red', line.cell, line.reset_neg_b)
  connect('red', line.reset_neg_b, line.reset_neg_black, 1, 1)
  return line
}


//                                                  ,,    ,,
//                                                `7MM    db
//                                                  MM
// `7MMpMMMb.pMMMb.  .gP"Ya `7MMpMMMb.pMMMb.        MM  `7MM  `7MMpMMMb.  .gP"Ya
//   MM    MM    MM ,M'   Yb  MM    MM    MM        MM    MM    MM    MM ,M'   Yb
//   MM    MM    MM 8M""""""  MM    MM    MM        MM    MM    MM    MM 8M""""""
//   MM    MM    MM YM.    ,  MM    MM    MM        MM    MM    MM    MM YM.    ,
// .JMML  JMML  JMML.`Mbmmd'.JMML  JMML  JMML.    .JMML..JMML..JMML  JMML.`Mbmmd'



function generate_memory_line(address, config, rom, context) {
  let line = {
    write_address: 'constant-combinator',
    write_lamp: 'small-lamp',
    write_gate: 'decider-combinator',
    cell: 'decider-combinator',
    rom_spacer: 'space',
    rom: 'constant-combinator',
    query_address: 'constant-combinator',
    query_lamp: 'small-lamp',
    query_gate: 'decider-combinator',
  }
  for (let k in line) {
    line[k] = {name: line[k]}
  }
  if (rom.has(address)) {
    delete line.cell

    line.rom.control_behavior = {filters: []}
    line.rom.direction = 2
    let resolved_constants = resolve_expression(rom.get(address), context)
    if (resolved_constants && resolved_constants.node == 'signals') {
      try {
        try {
          constant_combinator_configure(line.rom, resolved_constants.signals, context)
        } catch (e) {
          console.log(`infooz 4 ${inspect({operation})}`)
          throw e
        }
      } catch (e) {
        console.log(`infooz 3 ${inspect({operation})}`)
        throw e
      }
    }
  } else {
    delete line.rom_spacer
    delete line.rom
  }
  if (line.cell) {
    line.cell.control_behavior = {
      decider_conditions: {
        comparator: '=',
        first_signal: config.clear,
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    }
    connect(Q_BUS_COLOR, line.cell, line.cell)
  }
  if (line.write_address) {
    line.write_address.control_behavior = {filters: [{
      signal: config.memwsig,
      count: -address,
      index: 1
    }]}
    line.write_address.direction = 2
  }
  if (line.query_address) {
    line.query_address.control_behavior = {filters: [{
      signal: config.memqsig,
      count: -address,
      index: 1
    }]}
    line.query_address.direction = 2
  }
  if (line.write_lamp) {
    line.write_lamp.control_behavior = {
      circuit_condition: {
        first_signal: config.memwsig,
        constant: 0,
        comparator: '='
      }
    }
  }
  if (line.query_lamp) {
    line.query_lamp.control_behavior = {
      circuit_condition: {
        first_signal: config.memqsig,
        constant: 0,
        comparator: '='
      }
    }
  }
  if (line.write_gate) {
    line.write_gate.control_behavior = {
      decider_conditions: {
        comparator: '=',
        first_signal: config.memwsig,
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    }
  }
  if (line.query_gate) {
    line.query_gate.control_behavior = {
      decider_conditions: {
        comparator: '=',
        first_signal: config.memqsig,
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    }
  }
  if (address == 0) {
    connect(W_BUS_COLOR, line.write_lamp, line.write_gate)
    connect(Q_BUS_COLOR, line.query_lamp, line.query_gate)
  }
  connect(flip[W_BUS_COLOR], line.write_address, line.write_lamp)
  connect(flip[W_BUS_COLOR], line.write_address, line.write_gate)

  if (line.cell) {
    connect(flip[Q_BUS_COLOR], line.write_gate, line.cell)
    connect(flip[Q_BUS_COLOR], line.cell, line.query_address)
  } else {
    connect(flip[Q_BUS_COLOR], line.rom, line.query_address)
  }
  connect(flip[Q_BUS_COLOR], line.query_address, line.query_gate)
  connect(flip[Q_BUS_COLOR], line.query_address, line.query_lamp)

  return line
}


//                                 ,,
// `7MM"""Mq.                      db            mm
//   MM   `MM.                                   MM
//   MM   ,M9  .gP"Ya   .P"Ybmmm `7MM  ,pP"Ybd mmMMmm .gP"Ya `7Mb,od8 ,pP"Ybd
//   MMmmdM9  ,M'   Yb :MI  I8     MM  8I   `"   MM  ,M'   Yb  MM' "' 8I   `"
//   MM  YM.  8M""""""  WmmmP"     MM  `YMMMa.   MM  8M""""""  MM     `YMMMa.
//   MM   `Mb.YM.    , 8M          MM  L.   I8   MM  YM.    ,  MM     L.   I8
// .JMML. .JMM.`Mbmmd'  YMMMMMb  .JMML.M9mmmP'   `Mbmo`Mbmmd'.JMML.   M9mmmP'
//                     6'     dP
//                     Ybmmmd'

function generate_register(config) {
  let line = {
    mem: 'decider-combinator',
    bus: 'constant-combinator',
  }
  for (let k in line) line[k] = {name: line[k]}
  if (line.mem) {
    line.mem.control_behavior = {
      decider_conditions: {
        comparator: '=',
        first_signal: config.clear,
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    }
  }
  return line
}

//                                                                                                                ,,        ,,
//   .g8"""bgd                                                mm                                                 *MM        db                       mm
// .dP'     `M                                                MM                                                  MM                                 MM
// dM'       ` ,pW"Wq.`7MMpMMMb.pMMMb. `7MMpdMAo.`7MM  `7MM mmMMmm .gP"Ya       ,p6"bo   ,pW"Wq.`7MMpMMMb.pMMMb.  MM,dMMb.`7MM  `7MMpMMMb.   ,6"Yb.mmMMmm ,pW"Wq.`7Mb,od8
// MM         6W'   `Wb MM    MM    MM   MM   `Wb  MM    MM   MM  ,M'   Yb     6M'  OO  6W'   `Wb MM    MM    MM  MM    `Mb MM    MM    MM  8)   MM  MM  6W'   `Wb MM' "'
// MM.        8M     M8 MM    MM    MM   MM    M8  MM    MM   MM  8M""""""     8M       8M     M8 MM    MM    MM  MM     M8 MM    MM    MM   ,pm9MM  MM  8M     M8 MM
// `Mb.     ,'YA.   ,A9 MM    MM    MM   MM   ,AP  MM    MM   MM  YM.    ,     YM.    , YA.   ,A9 MM    MM    MM  MM.   ,M9 MM    MM    MM  8M   MM  MM  YA.   ,A9 MM
//   `"bmmmd'  `Ybmd9'.JMML  JMML  JMML. MMbmmd'   `Mbod"YML. `Mbmo`Mbmmd'      YMbmd'   `Ybmd9'.JMML  JMML  JMML.P^YbmdP'.JMML..JMML  JMML.`Moo9^Yo.`Mbmo`Ybmd9'.JMML.
//                                       MM
//                                     .JMML.

function generate_compute_combinator({operator, operands}, context) {
  // console.log('generate_compute_combinator', inspect({operator, operands}))
  operator = operator.string

  if (operator == NONE) {
    return {name: 'space', size: 2}
  } else if (operator == CONST) {
    let constcomb = {name: 'constant-combinator', direction: 2}
    let resolved_signals = operands[0] && resolve_expression(operands[0], context)
    if (resolved_signals && resolved_signals.node == 'signals') {
      try {
        constant_combinator_configure(constcomb, resolved_signals.signals, context)
      } catch (e) {
        console.log(`infooz 4 ${inspect({operation})}`)
        throw e
      }
    }
    return constcomb
  } else if ([ARITH, DECID].includes(operator)) {
    let conditions = {}
    let resolved_operand


    resolved_operand = resolve_expression(operands[0], context)
    if (resolved_operand.node == 'signals') {
      let signal = decode_rich_text_token(resolved_operand.signals[0].name)
      conditions.first_signal = signal
    } else if (typeof resolved_operand == 'number') {
      conditions.first_constant = resolved_operand
    } else
      throw new Error(`oh no 0 ${inspect({operator, operands})}`)

    resolved_operand = resolve_expression(operands[1], context)
    let operand1 = resolved_operand.signals[0].name.string
    switch (operand1) {
    case '<=': operand1 = '≤'; break;
    case '!=': operand1 = '≠'; break;
    case '>=': operand1 = '≥'; break;
    }
    conditions[operator == ARITH ? 'operation' : 'comparator'] = operand1

    resolved_operand = resolve_expression(operands[2], context)
    if (resolved_operand.node == 'signals') {
      let signal = decode_rich_text_token(resolved_operand.signals[0].name)
      conditions.second_signal = signal
    } else if (typeof resolved_operand == 'number') {
      conditions[operator == ARITH ? 'second_constant' : 'constant'] = resolved_operand
    } else
      throw new Error(`oh no 2 ${inspect({operator, operands})}`)

    resolved_operand = resolve_expression(operands[3], context)
    if (resolved_operand.node == 'signals') {
      let signal = decode_rich_text_token(resolved_operand.signals[0].name)
      conditions.output_signal = signal
      if (operator == DECID) {
        let v = resolve_expression(resolved_operand.signals[0].value, context)
        conditions.copy_count_from_input = v != 1
      }
    }

    let control_behavior = {}
    control_behavior[operator == ARITH ? 'arithmetic_conditions' : 'decider_conditions'] = conditions

    let name = operator == ARITH ? 'arithmetic-combinator' : 'decider-combinator'

    return {name, control_behavior, direction: 2}
  }
  // TODO ERROR on unknown op
}


//                           ,,                ,,    ,,
//                         `7MM              `7MM    db
//                           MM                MM
//  ,p6"bo   ,pW"Wq.    ,M""bMM  .gP"Ya        MM  `7MM  `7MMpMMMb.  .gP"Ya
// 6M'  OO  6W'   `Wb ,AP    MM ,M'   Yb       MM    MM    MM    MM ,M'   Yb
// 8M       8M     M8 8MI    MM 8M""""""       MM    MM    MM    MM 8M""""""
// YM.    , YA.   ,A9 `Mb    MM YM.    ,       MM    MM    MM    MM YM.    ,
//  YMbmd'   `Ybmd9'   `Wbmd"MML.`Mbmmd'     .JMML..JMML..JMML  JMML.`Mbmmd'

function constant_combinator_configure(combinator, signals, context, max) { // TODO replace this function with _with_sigmap
  let i = 1
  combinator.control_behavior = {filters: []}
  for (let signal of signals) {
    let decoded_signal =  decode_rich_text_token(signal.name)
    let resolved_count = resolve_expression(signal.value, context)
    if (typeof resolved_count !== 'number') {
      throw new Error(`oopsie doopsie signal count is not a number ${inspect({decoded_signal, resolved_count})}`)
    }
    combinator.control_behavior.filters.push({
      signal: decoded_signal,
      count: resolved_count,
      index: i++
    })
    if (max !== undefined && i > max) break;
  }
}
function constant_combinator_configure_with_sigmap(combinator, sigmap, max) {
  let i = 1
  combinator.control_behavior = {filters: []}
  for (let [name, count] of sigmap) {
    let decoded_signal = decode_rich_text_token(name)
    combinator.control_behavior.filters.push({
      signal: decoded_signal,
      count,
      index: i++
    })
    if (max !== undefined && i > max) break;
  }
}

let get_point_from_multi_connect_bus = (map, regbus, input_colored_count, memr_colored_count)=>keyword=> {
  let registers_count = input_colored_count + memr_colored_count
  let v = map.get(keyword)
  if (v < 0) throw new Error(`Register '[${keyword}] ${v}' not available, minimum index is 0`)
  if (['mc', 'mcr', 'mcw'].includes(keyword)) {
    if (v >= memr_colored_count) throw new Error(`Register '[${keyword}] ${v}' not available with ${memr_colored_count} defined mc registers.`)
    v += input_colored_count
  } else if (v >= input_colored_count) throw new Error(`Register '[${keyword}] ${v}' not available with ${input_colored_count} defined ic registers.`)

  let past_zero = (regbus.length - 1) % registers_count
  let idx_zero = regbus.length - 1 - past_zero
  let bus_idx = idx_zero + v
  if (bus_idx >= regbus.length) bus_idx -= registers_count
  return regbus[bus_idx]
}

function generate_line(operation, compute_combinators, {regbus, input_colored_count, memr_colored_count}, mem_size, config, context) {
  // console.log('generate_line()', inspect({operation}))
  if (operation.operator.string == NOP) return NOP

  context.dynamic.set('ip', operation.address)

  let line = {
    input: 'constant-combinator',
    precompute: 'constant-combinator',
    compute: generate_compute_combinator,
    address: 'constant-combinator',
    lamp: 'small-lamp',
    registers1: 'constant-combinator',
    gate: 'decider-combinator',
    registers: 'constant-combinator',
    memqw: 'constant-combinator',
    out_jump: 'constant-combinator',
  }
  if (!mem_size) {
    delete line.input
    delete line.memqw
  }
  if (context.defines.has('lamps') && (resolve_expression(context.defines.get('lamps'), context) & 1) == 0) {
    delete line.lamp
  }
  if (!regbus.length) {
    delete line.registers
    delete line.registers1
  }
  let registers_count = input_colored_count + memr_colored_count
  if (registers_count <= 9) {
    delete line.registers1
  }
  for (let k in line) {
    if (typeof(line[k]) == 'string') line[k] = {name: line[k]}
    else {
      line[k] = line[k](operation, context)
      compute_combinators.push(line[k])
    }
  }
  if (registers_count > 9) regbus.push(line.registers1)
  regbus.push(line.registers)

  if (line.address) {
    line.address.direction = 2

    let ADDRESS_CONSTANTS
    if ([ARITH, DECID].includes(operation.operator.string))
      ADDRESS_CONSTANTS = 4
    else if (CONST == operation.operator.string)
      ADDRESS_CONSTANTS = 1
    else if (NONE == operation.operator.string)
      ADDRESS_CONSTANTS = 0
    let resolved_address_constants = operation.operands[ADDRESS_CONSTANTS] && resolve_expression(operation.operands[ADDRESS_CONSTANTS], context)
    line.address.control_behavior = {filters: []}
    if (resolved_address_constants && resolved_address_constants.node == 'signals') {
      try {
        constant_combinator_configure(line.address, resolved_address_constants.signals, context, 19)
      } catch (e) {
        console.log(`infooz 1 ${inspect({operation})}`)
        throw e
      }
    }
    line.address.control_behavior.filters.push({
      signal: config.ipsig,
      count: operation.address,
      index: 20
    })
  }
  if (line.lamp) {
    line.lamp.control_behavior = {
      circuit_condition: {
        first_signal: config.ipsig,
        constant: 0,
        comparator: '='
      }
    }
  }
  if (line.gate) {
    line.gate.control_behavior = {
      decider_conditions: {
        comparator: '=',
        first_signal: config.ipsig,
        constant: 0,
        output_signal: { type: 'virtual', name: 'signal-everything' },
        copy_count_from_input: true
      }
    }
  }

  connect(flip[IP_BUS_COLOR], line.address, line.gate)
  if (line.lamp) connect(flip[IP_BUS_COLOR], line.address, line.lamp)

  let connection_points_in = []
  if (operation.in) {
    let point = get_point_from_multi_connect_bus(operation.in, regbus, input_colored_count, memr_colored_count)

    if (operation.in.has('in')) { // 'green'
      connect(IN_BUS_COLOR, line.input, line.compute)
    } else if (operation.in.has('icr')) {
      connect(IN_BUS_COLOR, point('icr'), line.compute) // 'green'
    } else if (operation.in.has('ic')) {
      connect(IN_BUS_COLOR, point('ic'), line.compute) // 'green'
    } else if (operation.in.has('mcw')) {
      connect(flip[R_BUS_COLOR], point('mcw'), line.compute) // 'green'
    }

    if (operation.in.has('memr')) { // 'red'
      connect(R_BUS_COLOR, line.input, line.compute)
    } else if (operation.in.has('mcr')) {
      connect(R_BUS_COLOR, point('mcr'), line.compute) // 'red'
    } else if (operation.in.has('mc')) {
      connect(R_BUS_COLOR, point('mc'), line.compute) // 'red'
    } else if (operation.in.has('icw')) {
      connect(flip[IN_BUS_COLOR], point('icw'), line.compute) // 'red'
    }
  }
  if (operation.out) {
    let point = get_point_from_multi_connect_bus(operation.out, regbus, input_colored_count, memr_colored_count)

    if (operation.out.has('memq')) {
      connect(Q_BUS_COLOR, line.gate, line.memqw) // 'green'
    } else if (operation.out.has('out')) {
      connect(OUT_BUS_COLOR, line.gate, line.out_jump) // 'green'
    } else if (operation.out.has('in')) {
      connect(OUT_BUS_COLOR, line.gate, line.input) // 'green'
    } else if (operation.out.has('icr')) {
      connect(IN_BUS_COLOR, line.gate, point('icr')) // 'green'
    } else if (operation.out.has('mcw')) {
      connect(flip[R_BUS_COLOR], line.gate, point('mcw')) // 'green'
    } else if (operation.out.has('mc')) {
      connect(flip[R_BUS_COLOR], line.gate, point('mc')) // 'green'
    }

    if (operation.out.has('memw')) {
      connect(W_BUS_COLOR, line.gate, line.memqw) // 'red'
    } else if (operation.out.has('jump')) {
      connect(J_BUS_COLOR, line.gate, line.out_jump) // 'red'
    } else if (operation.out.has('memr')) {
      connect(R_BUS_COLOR, line.gate, line.input) // 'red'
    } else if (operation.out.has('mcr')) {
      connect(R_BUS_COLOR, line.gate, point('mcr')) // 'red'
    } else if (operation.out.has('icw')) {
      connect(flip[IN_BUS_COLOR], line.gate, point('icw')) // 'red'
    } else if (operation.out.has('ic')) {
      connect(flip[IN_BUS_COLOR], line.gate, point('ic')) // 'red'
    }
  }
  let operands = operation.operands
  let iop = inout_params(operation)
  let PRE = iop.pre
  let successfully_connected_wire_color
  if (PRE !== undefined && operands[PRE] !== undefined) {
    if (!operation.in || (!operation.in.has('memr') && !operation.in.has('mc'))) {
      successfully_connected_wire_color = R_BUS_COLOR
    } else if (!operation.in.has('in') && !operation.in.has('ic')) {
      successfully_connected_wire_color = IN_BUS_COLOR
    }
    if (successfully_connected_wire_color) {
      connect(successfully_connected_wire_color, line.precompute, line.compute)
      line.precompute.direction = 2
      try {
        let sigmap = mapify_signals_expr(operands[PRE], context)
        constant_combinator_configure_with_sigmap(line.precompute, sigmap)
      } catch (e) {
        console.log(`infooz 2 ${inspect({operation})}`)
        throw e
      }
    } else {
      throw new Error(`Unable to connect PRE, combinator inputs taken`)
    }
  }
  if (!successfully_connected_wire_color) {
    line.precompute.name = 'space'
  }
  if (line.compute && !['newline', 'space'].includes(line.compute.name)) connect(flip[IP_BUS_COLOR], line.compute, line.address)
  else if (line.compute === undefined) throw new Error(`Unknown operator '${operation.operator.string}' L:${operation.operator.line} C:${operation.operator.column}`)

  return line
}


//   .g8"""bgd
// .dP'     `M
// dM'       ` ,pW"Wq.`7MMpMMMb.pMMMb. `7MMpdMAo.  ,pW"Wq.  ,pP"Ybd  .gP"Ya
// MM         6W'   `Wb MM    MM    MM   MM   `Wb 6W'   `Wb 8I   `" ,M'   Yb
// MM.        8M     M8 MM    MM    MM   MM    M8 8M     M8 `YMMMa. 8M""""""
// `Mb.     ,'YA.   ,A9 MM    MM    MM   MM   ,AP YA.   ,A9 L.   I8 YM.    ,
//   `"bmmmd'  `Ybmd9'.JMML  JMML  JMML. MMbmmd'   `Ybmd9'  M9mmmP'  `Mbmmd'
//                                       MM
//                                     .JMML.


function connect_entities_bus(prev_line, line, {red, green, redgreen}) {
  if (!red) red = []
  if (!green) green = []
  if (!redgreen) redgreen = []
  for (let c of [['red', red], ['green', green]]) {
    for (let n of redgreen) {
      c[1].push(n)
    }
    for (let k of c[1]) {
      let p = [1, 1]
      if (typeof k != 'string') {
        ;[k, p] = k
      }
      if (prev_line[k] && line[k])
        connect(c[0], prev_line[k], line[k], p[0], p[1])
    }
  }
}

function position_entities(line, x, y) {
  let start_x = x
  for (let k in line) {
    if (k == 'compute') {
      if (line[k].name == 'constant-combinator') ++x
    }
    if (line[k].name == 'space') {
      x += line[k].size != null ? line[k].size : 1
      continue;
    }
    if (line[k].name == 'newline') {
      x = start_x
      ++y
      continue;
    }
    let w = ['arithmetic-combinator', 'decider-combinator'].includes(line[k].name) ? 2 : 1
    line[k].position = {x: x + w/2, y: y + 0.5}
    if (w == 2 && line[k].direction === undefined) {
      line[k].direction = 2
    }
    x += w
  }
  ++y
  return {x, y}
}

function make_entity_composition(assembled) {
  let {operations, defines, mem_size, rom, config, context} = assembled

  let entities = []
  let compute_combinators = []
  let code_line

  let y = 0
  let line
  let lines = [], mem_lines = []

  line = null


  // memory
  for (let i = 0; i < mem_size; ++i) {
    let x = 0
    let prev_line = line
    line = generate_memory_line(i, config, rom, context)
    let args = {red: [], green: []}
    for (let e of [['query_gate', [2, 2]]]) args[R_BUS_COLOR].push(e)
    for (let e of ['write_lamp', 'write_gate']) args[W_BUS_COLOR].push(e)
    for (let e of ['query_lamp', 'query_gate']) args[Q_BUS_COLOR].push(e)
    if (prev_line) connect_entities_bus(prev_line, line, {red: args.red, green: args.green, /*redgreen: ['out_jump', 'ip_bus']*/})
    y = position_entities(line, x, y).y
    for (let k in line) if (!['newline', 'space'].includes(line[k].name)) entities.push(line[k])
    mem_lines.push(line)
  }

  // registers_count
  let input_colored_count = 0
  if (defines.has('ic')) input_colored_count = resolve_expression(defines.get('ic'), {defines})
  if (input_colored_count < 0) throw new Error(`${'ic'} minimum valid value is 0`)
  let memr_colored_count = 0
  if (defines.has('mc')) memr_colored_count = resolve_expression(defines.get('mc'), {defines})
  if (memr_colored_count < 0) throw new Error(`${'mc'} minimum valid value is 0`)
  let registers_count = input_colored_count + memr_colored_count
  let REGISTERS_HEIGHT = registers_count <= 9 ? registers_count : Math.ceil(registers_count / 2)

  // IP
  let IP_LINES_HEIGHT = 1
  let CODE_LINE_HAS_LAMP = !context.defines.has('lamps') || (resolve_expression(context.defines.get('lamps'), context) & 1)
  let IP_LINES_WIDTH = registers_count > 9 ? 3 - !CODE_LINE_HAS_LAMP : (4 + CODE_LINE_HAS_LAMP)
  if (registers_count == 0) IP_LINES_WIDTH += 2
  let line_ip = generate_ip(config)
  let arr_line_ip
  for (let i = 0; i < 2; ++i) {
    arr_line_ip = []
    let x = 0
    for (let k in line_ip) {
      if (line_ip[k].name == 'newline') continue
      let w = 1 + ['arithmetic-combinator', 'decider-combinator'].includes(line_ip[k].name)
      if (x + w > IP_LINES_WIDTH) {
        arr_line_ip.push({name: 'newline'})
        if (!i) ++IP_LINES_HEIGHT
        x = 0
      }
      arr_line_ip.push(line_ip[k])
      x += w
    }
  }
  let x = +!!mem_size
  let padding = REGISTERS_HEIGHT - IP_LINES_HEIGHT
  while (padding-- > 0) arr_line_ip.unshift({name: 'newline'})
  let position = position_entities(arr_line_ip, x, y)
  x = position.x
  for (let k in arr_line_ip) if (!['newline', 'space'].includes(arr_line_ip[k].name)) entities.push(arr_line_ip[k])


  // Registers
  // if (registers_count > 20) throw new Error(`Register count > 20 currently not supported`)
  let registers = []
  let regbus = []
  let register_line_entities = []

  let REG_SPACE_SIZE = IP_LINES_WIDTH + !!mem_size
  let REG_WIDTH = 3 * ((registers_count > 0) + (registers_count > 9))
  for (let i = 0; i < registers_count; ++i) {
    let line = generate_register(config)
    let newline = registers_count <= 9 || i % 2 == 0
    if (i && newline) register_line_entities.push({name: 'newline'})
    if (newline) register_line_entities.push({name: 'space', size: REG_SPACE_SIZE})
    for (let k in line) register_line_entities.push(line[k])

    let color = i < input_colored_count ? IN_BUS_COLOR : R_BUS_COLOR
    connect(flip[color], line.mem, line.mem)
    connect(flip[color], line.mem, line.bus)
    connect(color, line.mem, line.bus)

    regbus.push(line.bus)
    registers.push(line)

    for (let k in line) if (!['newline', 'space'].includes(line[k].name)) entities.push(line[k])
  }
  x = 0
  if (register_line_entities.length) {
    let padding = IP_LINES_HEIGHT - REGISTERS_HEIGHT
    while (padding-- > 0) register_line_entities.unshift({name: 'newline'})
    y = position_entities(register_line_entities, x, y).y
  } else
    y = position.y


  // bus_past_registers
  let bus_past_registers = []
  let height = Math.max(IP_LINES_HEIGHT, REGISTERS_HEIGHT)
  line = null
  for (let i = 0; i < height; ++i) {
    let prev_line = line
    line = {
      input:    {name: 'constant-combinator', position: {x:  0 + 1/2, y: y - height + i + 1/2}},
      memqw:    {name: 'constant-combinator', position: {x: REG_SPACE_SIZE + REG_WIDTH + 0 + 1/2, y: y - height + i + 1/2}},
      out_jump: {name: 'constant-combinator', position: {x: REG_SPACE_SIZE + REG_WIDTH + !!mem_size + 1/2, y: y - height + i + 1/2}},
    }
    if (!mem_size) {
      delete line.input
      delete line.memqw
    }
    bus_past_registers.push(line)
    if (prev_line) connect_entities_bus(prev_line, line, {redgreen: ['input', 'memqw', 'out_jump']})
  }
  for (let line of bus_past_registers) for (let k in line) entities.push(line[k])



  // Code line
  // line = null  // continuous bus
  for (let i = 0; i < operations.length; ++i) {
    if (operations[i].operator.string == VOID) continue;
    let candidate = generate_line(operations[i], compute_combinators, {regbus, input_colored_count, memr_colored_count}, mem_size, config, context)
    if (candidate == NOP) continue;
    x = 0
    let prev_line = line
    line = candidate
    let args = {red: [], green: []}
    for (let e of ['lamp', 'gate']) args[IP_BUS_COLOR].push(e)
    if (prev_line) connect_entities_bus(prev_line, line, {red: args.red, green: args.green, redgreen: ['input', 'memqw', 'out_jump']})
    let stored_y = y
    ;({x, y} = position_entities(line, x, y))

    if (line.registers && registers_count) {
      let last = regbus.length - 1
      let prev = last - registers_count
      connect('red', regbus[prev], regbus[last])
      connect('green', regbus[prev], regbus[last])
      if (registers_count > 9) {
        let last = regbus.length - 2
        let prev = last - registers_count
        connect('red', regbus[prev], regbus[last])
        connect('green', regbus[prev], regbus[last])
      }
    }

    for (let k in line) if (!['newline', 'space'].includes(line[k].name)) entities.push(line[k])
    lines.push(line)
  }

  if (lines.length && lines[0].lamp) connect(IP_BUS_COLOR, lines[0].lamp, lines[0].gate)

  // Substation
  let substations = []
  let prev_substation
  for (let yy = 0; yy <= y + 7; yy += 18) {
    let substation0 = {name: 'substation', position: {x: -1, y: yy + 1}}
    let substation1 = {name: 'substation', position: {x: REG_SPACE_SIZE + REG_WIDTH + !!mem_size + 2, y: yy + 1}}
    entities.push(substation0)
    entities.push(substation1)
    substations.push([substation0, substation1])
    electric_wire(substation0, substation1)
  }
  for (let i = 0; i < substations.length - 1; ++i) {
    electric_wire(substations[i][0], substations[i + 1][0])
    electric_wire(substations[i][1], substations[i + 1][1])
  }

  if (lines.length)
    connect(IP_BUS_COLOR, line_ip.cell, lines[0].gate)
  if (bus_past_registers.length)
    connect(J_BUS_COLOR, bus_past_registers.slice(-1)[0].out_jump, line_ip.cell)

  if (mem_lines.length) {
    connect(W_BUS_COLOR, bus_past_registers[0].memqw, mem_lines.slice(-1)[0].write_gate)
    connect(Q_BUS_COLOR, bus_past_registers[0].memqw, mem_lines.slice(-1)[0].query_gate)
    connect(R_BUS_COLOR, bus_past_registers[0].input, mem_lines.slice(-1)[0].query_gate, 1, 2)
  }

  assign_entity_numbers(entities)
  finalize_connections(entities)

  // print('compute_combinators.js', inspect(compute_combinators))
  return entities
}

//                           ,,
//  .M"""bgd mm              db
// ,MI    "Y MM
// `MMb.   mmMMmm `7Mb,od8 `7MM  `7MMpMMMb.  .P"Ybmmm
//   `YMMNq. MM     MM' "'   MM    MM    MM :MI  I8
// .     `MM MM     MM       MM    MM    MM  WmmmP"
// Mb     dM MM     MM       MM    MM    MM 8M
// P"Ybmmd"  `Mbmo.JMML.   .JMML..JMML  JMML.YMMMMMb
//                                          6'     dP
//                                          Ybmmmd'

// modified from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
function chunky(f, arr, reducer) {
  let acc = reducer[1]
  const QUANTUM = 32768
  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = f(...arr.slice(i, Math.min(i + QUANTUM, arr.length)))
    acc = reducer[0](acc, submin)
  }
  return acc
}

function read_blueprint_string(str) {
  let buffer = atob(str.slice(1)).split('').map(q=>q.codePointAt(0))
  return new TextDecoder().decode(pako.inflate(buffer))
}

function bytes_to_base64(bytes) {
  let binString = chunky(String.fromCodePoint, bytes, [(acc, c)=>acc + c, ''])
  return btoa(binString)
}
function write_blueprint_string(obj) {
  return '0' + bytes_to_base64(pako.deflate(JSON.stringify(obj), {level: 9}))
}

// print('input_blueprint.js', inspect(JSON.parse(read_blueprint_string(str))))

// read_blueprint_string(str)
//   .then(bp=>{
//     print('input_blueprint.js', inspect(bp))
//     return bp
//   })
//   .then(write_blueprint_string)
//   // .then(str => console.log(str))



//                                                                                           ,,        ,,
// `7MM"""Mq.                                                                               *MM      `7MM
//   MM   `MM.                                                                               MM        MM
//   MM   ,M9 `7MM  `7MM  `7MMpMMMb.       ,6"Yb.  ,pP"Ybd ,pP"Ybd  .gP"Ya `7MMpMMMb.pMMMb.  MM,dMMb.  MM  .gP"Ya `7Mb,od8
//   MMmmdM9    MM    MM    MM    MM      8)   MM  8I   `" 8I   `" ,M'   Yb  MM    MM    MM  MM    `Mb MM ,M'   Yb  MM' "'
//   MM  YM.    MM    MM    MM    MM       ,pm9MM  `YMMMa. `YMMMa. 8M""""""  MM    MM    MM  MM     M8 MM 8M""""""  MM
//   MM   `Mb.  MM    MM    MM    MM      8M   MM  L.   I8 L.   I8 YM.    ,  MM    MM    MM  MM.   ,M9 MM YM.    ,  MM
// .JMML. .JMM. `Mbod"YML..JMML  JMML.    `Moo9^Yo.M9mmmP' M9mmmP'  `Mbmmd'.JMML  JMML  JMML.P^YbmdP'.JMML.`Mbmmd'.JMML.

// print('code.js', codes)

function run_assembler(codes) {
  let sofar = {}
  try {
    if (!Array.isArray(codes)) codes = [codes]

    let blueprints = []
    for (let i = 0; i < codes.length; ++i) {
      sofar = {}
      sofar.index = i
      let code = codes[i]
      // console.log(code)

      let tokens = tokenize(code)
      // print('tokens.js', inspect(tokens))
      if (tokens[0].token == 'TOKEN_ERROR') {
        console.log(i, tokens[0])
        return {index: i, tokens}
      }
      sofar.tokens = tokens

      let parse_tree = parse(tokens)
      // print('parse_tree.js', inspect(parse_tree))
      if (parse_tree.node == 'PARSE_ERROR') {
        console.log(i, parse_tree)
        return {index: i, tokens, parse_tree}
      }
      sofar.parse_tree = parse_tree

      let assembled = assemble(parse_tree)
      sofar.assembled = assembled
      // print('assembled.js', inspect(assembled))

      let expanded = render_expanded(assembled)
      sofar.expanded = expanded

      let entities = make_entity_composition(assembled)
      sofar.entities = entities
      // print('entities.js', inspect(entities))

      let blueprint = {
        blueprint: {
          icons: [{signal: {type: 'item', name: 'constant-combinator'}, index: 1}],
          entities,
          item: 'blueprint',
          label: `blueprint[${i}]`,
          version: 281479278231552
        }
      }
      sofar.blueprint = blueprint

      // print('blueprint.js', inspect(blueprint))

      blueprints.push(blueprint)
      if (codes.length == 1) {
        return {tokens, parse_tree, assembled, expanded, blueprint, 'bp-string': write_blueprint_string(blueprint)}
      }
    }

    if (codes.length > 1) {
      blueprints = blueprints.map((blueprint, index)=>({blueprint: blueprint.blueprint, index}))
      let blueprint_book = {
        blueprint_book: {
          blueprints,
          item: 'blueprint-book',
          label: 'blueprint-book' + blueprints.length,
          active_index: 0,
          version: 281479278231552,
        }
      }
      // console.log(write_blueprint_string(blueprint_book))
      let blueprint = blueprint_book
      return {blueprint, 'bp-string': write_blueprint_string(blueprint)}
    }
    let blueprint = blueprints[0]
    return {blueprint, 'bp-string': write_blueprint_string(blueprint)}
  } catch (error) {
    sofar.error = error
    return sofar
  }
}

export {
  run_assembler
}