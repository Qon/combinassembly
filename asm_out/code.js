

.define gtoe [≥]
.define ne [≠]
.define ltoe [≤]

.define clear [white] 1

.global sp
.global stack 20

.define ic 5
.define mc 1

%macro stop
  none    [B] 1, [jump]
  none    [B] 1, [jump]
  none    [B] 1, [jump]
%endmacro

%macro mov ; src, dst, const
  none    clear, :1
  connect :0, :1, :2
%endmacro

%macro set ; const, dst
  none    clear, :1
  none    :0, :1
%endmacro

%macro jmp ; label
  none    [B] ip + 3 - :0, [jump]
  nop
  nop
%endmacro

%macro branch ; label, signal left, signal operator, signal right, register read_condition
  decid   :1, :2, :3, [B],, :4, [jump], [B] ip + 3 - :0
  nop
  nop
%endmacro

%macro wait ; signal left, signal operator, signal right, register read_condition
  decid   :0, :1, :2, [B] 1,, :3, [jump]
  decid   :0, :1, :2, [B] 1,, :3, [jump]
  decid   :0, :1, :2, [B] 1,, :3, [jump]
%endmacro

%macro connect ;  src_wire, dst_wire, add_constants
  arith   [each], [OR], 0, [each], :2, :0, :1
%endmacro

%macro load ; address, destination_register
  none    [green] :0, [memq]
  nop
  nop
  connect [memr], :1
%endmacro

%macro store ; address, source_register
  connect ,
%endmacro

%macro pushconst ; constant
  none    [red] 0 [S] 1, [memw]
  arith   [S], [OR], 0, [red], clear, [memr], [memw]
  arith   [S], [OR], 0, [red], :0, [memr], [memw]
  nop
  nop
%endmacro

%macro push ; source_register, constant
  none    [red] 0 [S] 1, [memw]
  arith   [S], [OR], 0  , [red], :1   , [memr], :0
  arith   [S], [OR], 0  , [red], clear, [memr], [memw]
  nop
  connect :0, [memw]
  arith   0  , [-] , [S], [red],      , [memr], :0
%endmacro

%macro pop ; destination_register
  none    [red] 0 [S] -1, [memw]
  arith   [S], [OR], 0, [green], [green] -1, [memr], [memq]
  nop
  none    clear, :0
  connect [memr], :0
%endmacro


%macro top ; destination_register, index
  arith   [S], [OR], 0, [green], [green] -1 - :1, [memr], [memq]
  nop
  none    clear, :0
  connect [memr], :0
%endmacro

%macro call ; label
  pushconst [B] - ip - 4
  jmp       :0
%endmacro

%macro return
  arith   [S], [OR], 0, [green], [green] -1, [memr], [memq]
  none    [red] [S] -1, [memw]
  nop
  arith   [B], [OR], 0, [B], [B] 3 + ip, [memr], [jump]
  nop
  nop
%endmacro

%macro stack_setup
  none    clear + [red] sp, [memw]
  none    [red] sp [S] stack, [memw]
  nop
  nop
  nop
  nop
%endmacro

%macro storeconst ; destination_address, const
  none    clear + [red] :0, [memw]
  none    ([red] :0) + :1, [memw]
%endmacro

;;; append_m2m is mov_m2m without clear signal.
%macro append_m2m ; source_address, destination_address
  none    [green] :0, [memq]
  nop
  nop
  connect [memr], [memw], [red] :1
%endmacro

%macro mov_m2m ; source_address, destination_address
  none    [green] :0, [memq]
  none    clear + [red] :1, [memw]
  nop
  connect [memr], [memw], [red] :1
%endmacro

:init
  stack_setup
:main
  set         [V] 5, [ic] 1
  call        fibonacci
  stop

:fibonacci
  branch      fib_ret, [V], [≤], 1, [ic] 1

  push        [ic] 1
  none        [V] -1, [ic] 1
  call        fibonacci
  pop         [ic] 1

  push        [ic] 0
  none        [V] -2, [ic] 1
  call        fibonacci
  pop         [ic] 1

  connect     [ic] 1, [ic] 0
  return
:fib_ret
  mov         [ic] 1, [ic] 0
  return
