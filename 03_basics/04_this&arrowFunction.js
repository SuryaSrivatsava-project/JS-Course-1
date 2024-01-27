// this keyword returns current context
const user = {
    username:'Surya',
    price:999,
    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to this website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = 'sam';
// user.welcomeMessage()

// console.log(this) 
// in node environment its {} empty object
// in browser its window object

// function one(){
//     const username = 'Surya'
//     console.log(this.username) // undefined
//     console.log(this) // in browser its window object
// }
// one()

// const sample = function(){
//     console.log(this)
// }
// sample()

// Arrow Functions

const chai = () =>{
    console.log(this); // this points to window object
}
chai();

// const addThree = (num1,num2,num3) => {
//     return num1+num2+num3;
// }

// Implicit return without {} for single statement
// const addThree = (num1,num2,num3) => num1+num2+num3;
//  const returnObject = (num1,num2) => ({username:'Surya'}); // returning object

// single parameter no need for paranthesis for parameters
// const addThree = num1 => num1+1;

console.log(addThree(1))

