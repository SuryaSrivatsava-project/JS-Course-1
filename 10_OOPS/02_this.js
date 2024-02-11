// 'use strict';
console.log(this) // window object in browser undefined in strict mode

// this in a functional space
function x(){
    console.log(this) // window object in browser
}
x();    
/*
- this in a global space
   1. global object differs based on execution engine
   2. this keyword runs differently in strict mode

 - this in strict mode - this substitution
    1. Non Strict Mode: If the value of this keyword is undefined or null, 
    this keyword will be replaced with globalObject

 - function
    this keyword value depends on how the function is called
    1. If function is called without any reference of Object in Strict Mode 
    it returns undefined in this keyword x() -> undefined
    2. If function is called with respect to a Object reference the this keyword
    points to Object  window.x() -> this -> Window object

-  this inside a Objects Method
   1. value of this keyword in a method is the Object itself

- this using call, apply and bind makes this point to reference used to execute the function

- this inside arrow Functions
  1. arrow functions do not have their own this keyword
  2. They take it from lexical environment where the "arrow function is enclosed"
  3. where the object is present in lexical context, gets this from enclosed lexical context {window object}
*/

//this inside a Objects method
const student = {
    name:'Surya',
    printName: function(){
        console.log(this.name);
    }
}
student.printName();
// call, apply and bind (sharing methods) 
// By overriding the value of this keyword
const student2={
    name:'Akshay'
}

student.printName.call(student2) // value of this=student2


// this inside an arrow Function
const obj ={
    a:'surya',
    x: () =>{
        console.log(this);
        // where the object is present in lexical context
        // gets this from enclosed lexical context {window object}
    }
}

obj.x()

const obj2 ={
    a:'surya',
    x: function(){
        const y = ()=>{
            console.log(this);
            // here the value is this object itself
        }
        y();
    }
}

obj2.x();