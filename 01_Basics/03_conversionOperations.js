let score = "33";
console.log(typeof score);
console.log(typeof(score));

// Numbers
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NAN but type is number
// true/false => 1/0
// null => 0
// undefined => NAN

// Booleans
let isLoggedIn = " ";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn,booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "sample" => true

let someNumber = 23;
let stringNumber = String(someNumber);
console.log(stringNumber,typeof stringNumber)