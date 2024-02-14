/** Async/Await
 * Async is a keyword used to make a function async
 * async function always return a promise
 * if we use return statement from async function we either return a promise
   or if we return non promise value such as return "some string" it wraps this value
   as a promise and send it.
 * await should be used in front of promise
 * await resolves the promise and stores the value in variable if we assign it
 * await keyword can only be used inside an async function
 */
// Async function
const p1 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('Resolved Promise');
  },5000)
})

const p2 = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve('Resolved Promise');
  },10000)
})
/*
//always return a promise
async function getData(){
    // return "hello";
    return p;
}
// data will have promise
const dataPromise = getData();
dataPromise.then((resp)=>console.log(resp))
console.log(dataPromise);
*/

//Async and Await combo are used to handle promises
async function handlePromise(){
  console.log("hello world"); // this statement prints first
  // Here JS engine does not go forward until this promise is resolved
  // JS engine waits for the promise to be resolved
   const val = await p1;
   console.log("namaste");
   console.log(val);
   const val2 = await p2;
   console.log("namaste");
   console.log(val2);

}
handlePromise()
/*
 Initially when handlePromise() is called in call stack the function prints hello world
 next the when await keyword shows up handlePromise() is suspended and is pulled out of call stack
 After p1 resolves, handlePromise() comes back to call stack and next for await in p2 it suspends
 Again after p2 is resolved, it resumes execution

 If p1 is executing in 10 sec and p2 takes 5 sec by the time p1 completes p2 also is done
 So both prints at a time
 */

// traditional way of handling promises
// function getData(){
//     // JS engine will not wait for promise to be resolved and continues to next line
//     p.then(res=>console.log(res));
//     // this prints first
//     console.log('namaste')
// }
// getData();