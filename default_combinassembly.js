let default_combinassembly = `# this is a comment, starts with the '#' and ends when this line does.
# :init
#     stack_setup
    # stack_setup is used by fibonacci_recursive but not needed for fibonacci_sequence_iterator
:main
                                    # calculate fibonacci(16) = 987, with f(0) = 0. [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    set     [V] 16, [ic] 1
    jump    fibonacci_sequence_iterator
:end
    halt                              # the return value will be at register ic 0 when the program finishes.

:fibonacci_sequence_iterator

.define b [ic] 0
.define n [ic] 1
.define a [ic] 2
.define i [ic] 3
.define t [ic] 4                    # t is our temp variable and for comparing values.
                                    # Reading 2 registers at once is possible if we read one ic register and one mc registers
                                    # But just using ic registers and combining the two in t is pretty easy so I went with that

    mov     n, b                      # b = n      (I like putting return value in register [ic] 0)
    branch  end, [V], [<=], 1, n      # if (n <= 1) return b

    set     [I] 2, i                  # i = 2      (We didn't jump to return so our loop variable can start here)
    set     [V] 1, a                  # a = 1
    set     [V] 1, b                  # b = 1

:loop
    mov     i, t                      # t = i      (i contains signal [I])
    add     n, t                      # t += n     (n contains signal [V])
    nop
    nop
    branch  end, [I], [=], [V], t     # if (i == n) goto end       (values of i and n are both available in t)

    const   [I] 1, i                  # ++i
    mov     b, t                      # t = b
    add     a, b                      # b += a
    mov     t, a                      # a = t

    jump    loop

.define clear [white] 1
.define ipsig [black]
.define jumpsig [J]
.define memqsig [green]
.define memwsig [red]

# .global sp, stack 1
# with no recursion and only a single function call our stack only needs space to save return address to main
# fibonacci_sequence_iterator doesn't use call, so we don't need .global

.define ic 5
.define mc 0
.define lamps 0b111

##   ### Recursive and (very) slow fibonacci function, doing f(n) = f(n-1) + f(n-2)
##   ### Uses signal [V] for both argument and return value, to simplify cases for n <= 1
##   :fibonacci_recursive
##     branch  fib_ret, [V], [≤], 1, [ic] 1  # stop recursion and return immediately for cases f(0) = 0, f(1) = 1

##     # calculate f(n-1)
##     push    [ic] 1
##     const   [V] -1, [ic] 1
##     call    fibonacci_recursive
##     pop     [ic] 1

##     # calculate f(n-2)
##     push    [ic] 0
##     const   [V] -2, [ic] 1
##     call    fibonacci_recursive
##     pop     [ic] 1

##     nop # need delay between pop and add for the value to propagate
##     nop
##     add     [ic] 1, [ic] 0 # add calculated value of f(n-1) to the return value of f(n-2) and return that
##     return
##   :fib_ret
##     mov     [ic] 1, [ic] 0 # "return n"
##     return



%halt
    const   jumpsig + 1, [jump]
    const   jumpsig + 1, [jump]
%

%mov      src, dst, const
    const   clear, dst
    add     src, dst, const
%

%set      const, dst
    const   clear, dst
    const   const, dst
%

%trans    A, B, reg_src, reg_dst
    arith   A, [OR], 0, B,, reg_src, reg_dst
%

%jump     label
    const   jumpsig + ip + 2 - label, [jump]
    nop
%

%branch   label, signal_left, signal_operator, signal_right, register_read_condition
    decid   signal_left, signal_operator, signal_right, jumpsig,, register_read_condition, [jump], jumpsig + ip + 2 - label
    nop
%

%wait     signal_left, signal_operator, signal_right, register_read_condition
    decid   signal_left, signal_operator, signal_right, jumpsig + 1,, register_read_condition, [jump]
    decid   signal_left, signal_operator, signal_right, jumpsig + 1,, register_read_condition, [jump]
    decid   signal_left, signal_operator, signal_right, jumpsig + 1,, register_read_condition, [jump]
%

%add      src_wire, dst_wire, add_constants
    arith   [each], [OR], 0, [each], add_constants, src_wire, dst_wire
%

%load     address, destination_register
    const   [green] address, [memq]
    nop
    nop
    add     [memr], destination_register
%

%store    address, source_register
    add     ,
%

%pushconstconstant
    const   [red] 0 [S] 1, [memw]
    arith   [S], [OR], 0, [red], clear, [memr], [memw]
    arith   [S], [OR], 0, [red], constant, [memr], [memw]
    nop
    nop
%

%push     source_register, constant
    const   [red] 0 [S] 1, [memw]
    arith   [S], [OR], 0  , [red], constant   , [memr], source_register
    arith   [S], [OR], 0  , [red], clear, [memr], [memw]
    arith   0  , [-] , [S], [red],      , [memr], source_register
    add     source_register, [memw]
%

%pop      destination_register
    const   [red] 0 [S] -1, [memw]
    arith   [S], [OR], 0, [green], [green] -1, [memr], [memq]
    nop
    const   clear, destination_register
    add     [memr], destination_register
%

%top      destination_register, index
    arith   [S], [OR], 0, [green], [green] -1 - index, [memr], [memq]
    nop
    const   clear, destination_register
    add     [memr], destination_register
%

%call     label
    pushconst jumpsig - ip - 5
    jump      label
%

%return
    arith   [S], [OR], 0, [green], [green] -1, [memr], [memq]
    const   [red] [S] -1, [memw]
    nop
    arith   jumpsig, [OR], 0, jumpsig, jumpsig + 2 + ip, [memr], [jump]
    nop
%

%stack_setup
    const   clear + [red] sp, [memw]
    const   [red] sp [S] stack, [memw]
    nop
    nop
    nop
    nop
%

%st_const destination_address, const
    const   clear + [red] destination_address, [memw]
    const   const + [red] destination_address, [memw]
%

### append_m2m is mov_m2m without clear signal.
%app_m2m  source_address, destination_address
    const   [green] source_address, [memq]
    nop
    nop
    add     [memr], [memw], [red] destination_address
%

%mov_m2m  source_address, destination_address
    const   [green] source_address, [memq]
    const   clear + [red] destination_address, [memw]
    nop
    add     [memr], [memw], [red] destination_address
%`

export {default_combinassembly}