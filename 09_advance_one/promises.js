// A promise (object) is representing the eventual completion (success or failure) which is resolve or reject
// States : pending, fulfilled, rejected
// Creating a promise
/*
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls
    setTimeout(function(){
        console.log('Async task');
        resolve();
    },1000)
});

// Consuming a promise .then() -> resolve, .catch() -> reject
// To connect .then() we must use resolve() in promise creation
// resolve() with no params will call .then() when consuming promise

promiseOne.then(function(){
    console.log("promise consumed")
})

// Without variable
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Task 2 is completed')
})

const promiseThree = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve({username:'Chai',email:'chai@chaiCode.com'});
   },1000)
})
promiseThree.then(function(data){
    console.log(data)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({userName:'Surya',password:'123'});
        }
        else{
            reject('Error in retreiving the information');
        }
    }, 1000);
})
// promiseFour.then((data)=>{
//     console.log(data);
// }).catch(err=>console.log(err))
// Promise chaining
// variable stores promise state
const userName = promiseFour.then((user)=>{
    console.log(user);
    return user.userName;
// This return will not store in variable userName instead can be used for chaining
}).then(function(data){
    console.log(data);
}).catch(err=>console.log(err))
.finally(()=>console.log('finally block'))
console.log(userName)
*/

// ******************* async/await *************************** //

// async await are similar to .then() and .catch()
// However waits the process to complete for proceeding
// async returns a promise
// async await cannot handle error directly and we need to use try{}catch(){}
// async makes function return a promise and does not have resolve and reject methods
// await makes an async function wait for a promise
// Both allows us to write asynchronous code in a synchronous manner
/*
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName:'JavaScript',password:'123'});
        }
        else{
            reject('JS info went wrong');
        }
    }, 1000);
})
// Where async function is created there await can be used
async function consumePromiseFive(){
    try{
     const response = await promiseFive
     console.log(response);
    }
    catch(e){
        console.log(e);
    }
}
consumePromiseFive();


async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // response.json() takes time so we need to await
    const responseData =  await response.json();
    console.log(responseData);
    }catch(e){e=>console.log(e)}
}
getAllUsers()


// Async/Await examples
function dataGame(){
const data = new Promise((resolve,reject)=>{
    console.log('done')
    resolve('completed');
})
return data;
}

function dataGame2(){
    const data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('completed set 2');
        },1000)
        
    })
    return data;
    }
async function fetchData(){
    const dataOne = await dataGame();
    const dataTwo = await dataGame2();
    console.log(dataOne)
    console.log(dataTwo)
}
fetchData();

*/

// fetch 
/*
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
     response.json();
}).then((resp)=>{
     resp}).catch(e=>console.log(e))

*/
// Fetch Examples
const getUser =  async function(){
    const data =   await getUsers();
    console.log('hello')
    console.log(data)
}
 async function getUsers(){
    
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = await resp.json();
        return userData;
 }

 getUser();

