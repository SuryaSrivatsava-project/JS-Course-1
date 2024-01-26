// Numbers
// const score = 400;
// const balance = new Number(50000);
// console.log(score);
// console.log(balance.toString());
// console.log(balance.toFixed(2));
// console.log(typeof balance)
// const otherNumber = 23.8856;
// console.log(otherNumber.toPrecision(3));
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('EN-IN'));

//************Maths*************

// console.log(Math);
// // converts -ve to +ve
// console.log(Math.abs(-1));
// // round .5 and above is next 4.5 - 4.9 is 5
// console.log(Math.round(4.5));
// // ceil .1 and above is next 4.1-4.9 is 5
// console.log(Math.ceil(4.0));
// // floor Anything from .1 and above is same value 4.1-4.9 is 4
// console.log(Math.floor(4.9));
// // min to find min value
// console.log(Math.min(4,5,6,7,9));
// // max to find max value
// console.log(Math.max(4,5,6,7,9));

// Math.random() -> gets value between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1)
const min = 10;
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);