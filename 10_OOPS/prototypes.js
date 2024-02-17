/*
    1. Whenever an object is created, JS attaches an object to the original object
    2. That's how we get access to all the properties and methods
    3. In below example arr.__proto__ can help access the prototype object
    4. only constructor fun

    prototype chaining

    Arrays:
    1. arr.__proto__ === Array.Prototype
    2. Array.Prototype.__proto__ === Object.Prototype
    3. Object.prototype.__proto__ === null

    Objects:
    1. obj.__proto__ === Object.Prototype
    2. Object.Prototype.__proto__ === null

    Functions:
    1. func.__proto__ === Function.Prototype
    2. func.__proto__.__proto__ === Object.Prototype

*/
const arr = ['Surya','Srivatsava'];
console.log(arr.__proto__);
const obj = {
    name:'Akshay',
    city:'Dehradun',
    getIntro: function(){
        console.log(`${this.name} is from ${this.city} `)
    }
}
function fun(){

}

let obj2 = {
    name:'Aditya'
}
// Never do this. Only for demonstration
// Prototypal inheritance
// If its not present in obj2 it accesses from obj if not it checks its proto
// obj2.getIntro() ,if its called this keyword from obj2 is currently initialized
obj2.__proto__ = obj;
console.log(obj2.city)

// Setting Functions
Function.prototype.myBind = function(){
    console.log('sample')
}

fun.myBind()