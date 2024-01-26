// function sayMyName(){
//     console.log('S');
//     console.log('U');
//     console.log('R');
//     console.log('Y');
//     console.log('A');
// }
// sayMyName(); // calling
// sayMyName; // reference

// function with parameters
// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(1,2); // addTwoNumbers(arg1,arg2)

// returning the value
/*
function addTwoNumbers(num1,num2){
    return num1+num2 // returning the function result
    console.log('demo') // unreachable code after returning a value
}
const result = addTwoNumbers(1,2); // addTwoNumbers(arg1,arg2)
// console.log(result);
*/

// Types of Inputs
/*
const loginUser = function(username){
    if(username){
    return `${username} just logged in`;
    }
    else{
        return `Please enter valid user name`
    }
}
const message = loginUser('Surya');
console.log(message)
*/

// Default Parameters
// const loginUser = function(username='sam'){
//     if(username){
//     return `${username} just logged in`;
//     }
//     else{
//         return `Please enter valid user name`
//     }
// }
// const message = loginUser();
// console.log(message)

// Functions with Objects
// rest parameter 1
// const calculateCartPrice = function(...items){
//     return items;
// }

// rest parameter 2
/*
const calculateCartPrice = function(item1,item2,...items){
    // item1: 200
    // item2: 400
    // items : [500]
    return items;
}
console.log(calculateCartPrice(200,400,500))
*/

// passing objects in to functions
const user = {
    username:'Surya',
    price:199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({username:'Sam',price:200})

const newArray = [200,300,400,500];
function returnSecondValue(arr){
    return arr[1];
}
console.log(returnSecondValue(newArray))
