Javascript is synchronous and single thread by default
Execution context is one by one line
Using Event and call backs it creates a new task queue and executions are pushed to stack
// fetch() executes before other async functions named setTimeOut, promises etc
// It gets micro task queue and priority queue
// other async functions or call backs get to task queue