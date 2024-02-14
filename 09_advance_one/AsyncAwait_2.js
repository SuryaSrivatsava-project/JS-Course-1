/*
    *Real world examples of Async and Await
    fetch call returns a promise
    fetch returns a response object is a body which is readable stream
    To convert readable stream to JSON we use Response.json()
    Even that is a promise when resolved gives back JSON result

    * Error Handling using async and await

      In traditional promises we use .catch() handler
      Here, we use try catch block

*/
const APIURL = "https://api.github.com/users/SuryaSrivatsava-project";

// Method 1
// async function handlePromise(){
//     try{
//     const responseObject = await fetch(APIURL); 
//     const data = await responseObject.json(); // this is promise as well so we need to await it
//     console.log(data);
//     }
//     catch(err){
//         console.log(new Error('Not valid URL'));
//     }
// }



// Method 2

async function handlePromise(){
    const responseObject = await fetch(APIURL); 
    const data = await responseObject.json(); // this is promise as well so we need to await it
    console.log(data);
}
handlePromise().then((data)=>console.log(data)).catch((err)=>console.log(err));