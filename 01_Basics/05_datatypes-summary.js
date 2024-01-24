// Primitive
// Call by Value -> Original data 
// 7 string, symbol, number, boolean, bigInt, null, undefined
const a = 1;
const b = true;
const c = 'sample';
const d = undefined;
const e = null;
const f = Symbol(1);
const g = 123n;
// Reference Types
// Non Primitive 
// Arrays, Objects, functions
const heros = ['spiderman','superman','batman'];
const obj = {name:'demo',id:1}
function greet(){
    console.log('Hello');
}
const greetPerson = function(){
    console.log('Hello Person')
}
greet();
greetPerson();

console.log(typeof f);
console.log(typeof heros);
console.log(typeof obj);
console.log(typeof greet)