Javascript execution contexts

1. Global execution context is passed to this keyword. this differs for node,browser for browser its window
2. Function/Functional execution context
3. Eval execution context

Phases:
1. Memory creation phase /creation phase (memory allocation)
2. Execution phase

Example code

 let val1 = 10;
 let val2 = 5;
 function addNum(val1,val2){
    let total = val1+val2;
    return total;
 }
let result1 = addNum(val1,val2);
let result2 = addNum(val1,val2);

Steps:

Cycle 1:
1. Any code runs under Global execution context and is allocated a this keyword
2. All variables are collected and are assigned memory and all variables are assigned with undefined
3. For Function it assigns the definition

Cycle 2: Execution phase
1. variables are assigned with values mentioned in code 
    val1 = 10 , val2 =5, 
    lines 15-18 are ignored 
2. when function addNum is called in line 19 a new execution context is created 
   for it which is a new variable environment + new execution thread/context.
3. Next memory phase (allocation of memory and assign undefined) and execution phase is done and returned to global execution context if value is returned
4. After execution of function it deletes the complete execution context


Call Stack
check in developer tools sources -> snippet -> execution stack

