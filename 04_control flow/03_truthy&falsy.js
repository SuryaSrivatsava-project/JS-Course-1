const userEmail = 's@email.com';
if(userEmail){
    console.log('got user email');
}
else{
    console.log("Don't have user email")
}

/*
// Falsy Values - false, 0, null, undefined, -0, BigInt 0n, "", NAN 
// Truthy Values - "0", 'false', " ", [], {}, function(){}
*/

// check if array and object are empty

const userNames = [];
const user = {};

if(userNames.length ===0){
    console.log('empty')
}
if(Object.keys(user).length === 0){
    console.log('object is empty')
}

// Nullish Coalescing Operator (??) : null, undefined
let val1;
val1 = null??10;
let val2  = null??10??20; // 10
console.log(val1)
console.log(val2)

// Ternary operator (Short hand notation) condition?true:false
// const balance = 1000;
// const result = balance>500?true:false;
// console.log(result)