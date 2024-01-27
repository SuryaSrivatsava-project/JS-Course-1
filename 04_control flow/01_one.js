// Control Flows
// if statements if(true) -> only executes if(false) -> doesnot execute

// const isUserLoggedIn = true;
// const temperature = 41
// if(temperature == 41){
// console.log('Temperature is less than 50');
// }
// else{
//     console.log('Temperature is greater than 50');
// }

// comparision operators >, <, <=, >= , == !=
// logical operators && (if true execution proceeds), || (if false proceeds), ??(null coercsion treats null and undefined as false)
// strict equality !==, === (checks both datatype and value)
// ternary operator ? 'true':'false'

// scope
/*
const score = 200;

if(score>100){
    const power = "fly";
// var power = "fly"; For var its functional scope so here in if/else this variable is accessible everywhere
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);// here power variable is not defined 
*/

//implicit scope. for multiple statements we use , in same line
// const amount = 1000;
// if(amount>500) console.log('Amount is greater than 500'), console.log('demo');

// nesting 
/*
const balance = 1000;
 if(balance<500){
    console.log('less than 500');
 }
 else if(balance<750){
    console.log('less than 750');
 }
 else if(balance<900){
    console.log('less than 900');
 }
 else{
    console.log('less than 1200');
 }
*/

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard){
    console.log('Allow to buy courses');
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log('Signed in');
}


