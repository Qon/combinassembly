# Combinassembly

______

### An "assembly" language for Factorio combinators

Write simple "assembly" code, get a blueprint for a combinator network that can execute the code in Factorio!
Combinassembly is not a general purpose HDL for generating arbitrary combinator networks, instead operations execute sequentially(ish). The assembler does not generate a binary for a CPU, each instruction is a combinator (or several) which computes the operation directly.

Combinassembly has registers and memory which it writes to and reads from. Instead of wiring combinators to eachother directly, everything goes through memory/register instead. How much memory and how many registers available is configured with assembly directives in your combinassembly source code.

Instruction pointer is in a special register, which is interacted with slightly differently but can be used to make jumps and conditional branching.

### Credits

- Code in directory Factorio-Computer-main from https://github.com/nns2009/Factorio-Computer with some slight modifications by me. Another cool assembly language.
- Ace from https://ace.c9.io/