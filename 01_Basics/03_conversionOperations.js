let score = "33";
// console.log(typeof score);
// console.log(typeof(score));

// Numbers
let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NAN but type is number
// true/false => 1/0
// null => 0
// undefined => NAN

// Booleans
let isLoggedIn = " ";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn,booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "sample" => true

let someNumber = 23;
let stringNumber = String(someNumber);
// console.log(stringNumber,typeof stringNumber)


/*******************************Operations************************* */

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = 'Hello';
let str2 = ' Surya';
// console.log(str1+str2)
// console.log(1+"2");
// console.log("1"+2);
// console.log("1"+2+2);
// console.log(1+2+"2");
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log(num1,num2,num3);

let gameCounter = 99;
gameCounter++;
console.log(gameCounter)

