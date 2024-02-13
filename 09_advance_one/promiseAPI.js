/* Promise API's
    1. Promise.All(iterable[p1,p2,p3,...]) (3sec,1sec,2sec)
        * used to handle multiple API calls/ promises together
        * takes array of promises as input
        * suppose p1 -> 3sec, p2-> 1sec and p3-> 2sec, considering success scenario
        * Promise.All() takes 3 sec in total to complete and return array of result [val1,val2,val3]
        * it will wait for all of them to finish
        * Any failure in any one of the promise executions returns an error and will not wait for other promises even if others resolve
        * If p1 fails it throws error after 3sec
    
    2. Promise.allSettled([p1,p2,p3])
        * If all of them get successful, at above time after 3sec we get [val1,val2,val3]
        * If one of these promises get rejected,it waits for all promises to get settled (resolved or rejected)
        * output [val1,err,val3] after 3sec
        
    3. Promise.race([p1,p2,p3]) (3s,1s,2s)
        * As soon as first promise is settled (resolved/rejected) which is p2 here it returns value 
        * (val2)
        * If any error comes for first settled promise and it returns error
    
    4. Promise.any([p1,p2,p3])  (3s,1s,2s)
        * Its similar to race however it waits for the first promise to get successful.
        * In Promise.race() irrespective of the success/failure it returns 
        * In Promise.any() it waits for resolved promise
        * If all fail, the result will be aggregated error of all three errors in example
*/

// Code
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('Successful P1 promise');
        reject('Rejected P1 promise');
    },3000)    
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('Successful P2 promise');
        reject('p2 is rejected');
    },1000)    
})


const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('Successful P3 promise');
        reject('p3 is rejected');
    },2000)    
})
const arr = [];
// Promise.all()
Promise.all([p1,p2,p3]).then((result)=>arr.push(result)).catch((err)=>console.log(err));
setTimeout(()=>{
    console.log(arr.flat(Infinity))
},6000)
//Promise.allSettled()
// Promise.allSettled([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err));
//Promise.race()
// Promise.race([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err));
// Promise.any()
Promise.any([p1,p2,p3]).then((result)=>console.log(result)).catch((err)=>console.log(err.errors));