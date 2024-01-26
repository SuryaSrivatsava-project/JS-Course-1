var c = 300
let a = 100 // global scope is 100
if(true){
let a= 10; // different variable inside scope so its 10
const b = 20;
var c = 30; // Reassigned to 30 or c = 30 also reassigns
console.log(a);
}
console.log(a);
// console.log(b);
console.log(c);

// scope {} when it comes with function, if/else not object
