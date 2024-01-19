# Combinassembly

[Try it live!](https://qon.github.io/combinassembly/) and press the "Assemble!" button execute the assembler to get the blueprint string that runs the Combinassembly code when built in Factorio. The constant combinator with a [dot] signal in the lop left corner will restart the program when toggled on or off.

______

# An "assembly" language for Factorio combinators

Write simple assembly code, get a blueprint for a combinator network that can execute the code in Factorio!
Combinassembly is not a general purpose HDL for generating arbitrary combinator networks, instead operations execute sequentially(ish). The assembler does not generate a binary for a CPU, each instruction is a combinator (or several) which computes the operation directly.

Combinassembly has registers and memory which it writes to and reads from. Instead of wiring combinators to eachother directly, everything goes through memory/register instead. How much memory and how many registers available is configured with assembly directives in your combinassembly source code.

Instruction pointer is in a special register, which is interacted with slightly differently but can be used to make jumps and conditional branching.

# Quick intro

## Comments

    # this is a comment

`#` starts a line comment that ends with the line. They can be used by themselves or at the end of any line with code.

## Instructions:

### `const`

	const	[A] 1 [B] 2 [C] -3 [D] 0b100 [E] (1 + 0xA / 3) * 2 - 3, [out]

creates a constant combinator with the signals [A] to [F] with values 1 to 5 (except C is negative). Integers only. All explicit calculation expressions written in Combinassembly are folded to resulting values when the program is assembled. Regular operator precedence is used (JS) with the operators `~ + - * / % | & ^` using the same meaning as in JS, except `/` gives integer results. `0x`, `0o` and `0b` for hexadecimal, octal and binary numbers. The second argument `[out]` specifies that the output is just wired to the circuit output wire.

If you try assembling the `const` program above you will notice some other combinators as well as a [black] signal used for making sure the signals are only output when the instruction pointer points to the address of that instruction.

### `arith` and `decid`

	arith	[A], [+],  3, [C]

creates an arithmetic combinator which is configured just like you would expect, with each argument being defined in same order as in Factorio GUI.

	decid	[A], [=], [B], [C]

`decid` is similarly the keyword for decider combinators. You can use integer constants instead of signals and `[each]`, `[anything]` and `[everything]` just like when configuring combinators in game, with the same rules.

```
arith	[A], [*], [B], [C]  ,            , [in], [out]
decid	[A], [>], [B], [C] 1, [V] 5 [W] 6, [in], [out], [Z] 7
```

The `arith` and `decid` combinators should also be configured with wiring, here `[in]` and `[out]` are used. You can skip writing arguments you don't need for these combinators, here the 5th and 8th argument for `arith` was skipped. The 5th argument adds signals to the constant combinator after which otherwise just holds the `[black]` address. The 8th arguments specifies the extra signals on the constant combinator on the input side, which only exists if there are signals defined for it.

The 2nd argument is used to configure the operation of the arithmetic/decider combinator, same string as written in the combinator configuration GUI in Factorio. Instead of `[≥]`, `[≠]` and `[≤]` you can use `[>=]`, `[!=]` and `[<=]` for your keyboard convinience.

### `nop` and `cnop`

`nop` is a "No OPeration" operation that does nothing but change addresses of following instructions. `nop 1` is the default delay, but other values are possible. `nop 2` is the same as writing two `nop` instruction in a row. Negative delays are semi-supported but is an easy way to mess up for non-experts. In `nop X`, X is an expression without label references.

`cnop` is the "Conditional NOP", it will be changed to a `nop X` where `X` is the set by the assembler to the smallest value from 0 to 2 which separates a read from a register after the `cnop` from a write to the same register before the `cnop`.

These are the 5 supported instructions.

## Macros

The macro system gives a powerful way to extend the language with new combinations of the existing instruction, with default values and parameter order of your choosing.

```python
:loop
    jump    loop

%jump     label
  const   [J] ip + 2 - label, [jump]
  nop
%
```

## Directives

### Directive `.define`

```python
.define some_signals	[A] 0xFF [red] an_integer [iron-plate] 3 [fluid=water] 10
.define an_integer		5
```

There are a few assembler directives. Directives start on a line with `.` followed by a keyword indentifying the specific directive. `.define` is used to bind a (constant) expression to a name. After the `.define` follows the identifier and then the expression, which may include other defined constants. `.define`'s are hoisted, their order doesn't matter and the defined constants may be used in any expression (and in expressions of other `.define` lines as well) before or after as long as there is no recursion (self or mutual).

### Directive `.global`

The other directive is `.global` which is used to create RAM. It also defines constants which can be used similarly to `.define`d constants, but the lines

```
.global foo
.global bar
.global heap    10
.global stack   stack_size
.global memsize 0

.define stack_size  4
```

define the named constants `foo` to 0, `bar` to 1, `heap` to 2, `stack` to 12 and `memsize` to 16. The numerical expression after the name specifies the size, not the value of the name. The order of the `.global` lines matter internally, but they are also hoisted and the constants can be used before or after, the value after the identifier becomes the sum of all `.global` expressions before it. With no numerical expression the size defaults to 1. Since the sum of all `.global` sizes is 16, a RAM circuit with 16 addressable memory combinators will be added to the blueprint.

### Directive `.rom` (WIP)

Used to define Read Only Memory. Will be placed in RAM memory space and read from like `.global`defined RAM, but writes to the memory space of `.rom` will be ignored. All ROM will be placed before all RAM memory cells in memory space, which means the values of `.global` defined constants will shift.

## Labels

```python
:loop
    jump    loop

%jump     label
  const   [J] ip + 2 - label, [jump]
  nop
%
```

Lines starting with `:` followed by just an identifier define a label (to a value set by the assembler) which can be used like any constant, except not inside expressions of other directives. Here the output of the `const` instruction is to the `[jump]`  register which hold the instruction pointer. The `[J]` value will be a relative jump backwards this many steps! For forward jumps use negative values! `ip` will be resolved to the address of the instruction it is currently used in, after macro expansion and `.define` expansion. `jump` will set the intruction pointer to the label value. It calculates the relative jump necessary to do the static jump by "subtracting" the current `ip` and "adding" the target label address, with adjustment of "2" to compensate for the duration of the jump macro (const + nop).

`[` and `]` are used for string literals. `[here is a string]`
After each string an expression for a value can be used.


# Credits

These are available under their own license:

- Code in directory Factorio-Computer-main from https://github.com/nns2009/Factorio-Computer with some slight modifications by me. Another cool assembly language. factasm_to_combinassembly.js compiles factasm to combinassembly when executed in Deno, with parsing of Factasm done by his Factasm parser.
- Ace editor from https://ace.c9.io/
- Pako to compress data, needed for blueprint string functionality