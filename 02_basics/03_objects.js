// Two ways to create an object Using Literal and constructor
// singleton -> created using constructor Object.create()
// literal -> not a singleton

// Object Literals
// keys are of string type

// symbol
const mySymbol = Symbol("key1")
const jsuser = {
    name:'Surya',
    "full Name":'Surya Srivatsava',
    // using symbol as key
    [mySymbol]:'key1',
    age:23,
    location:'Hyd',
    email:'Surya@google.com',
    isLoggedIn:false,
    lastLoginDays:["Monday",'Saturday']
}
// console.log(jsuser.email)
// console.log(jsuser["full Name"])
// console.log(jsuser["name"])
// console.log(jsuser[mySymbol])

jsuser.email = 'surya@gamerpro.com'
// console.log(jsuser)

// freeze the object so that no changes apply here
// Object.freeze(jsuser);

jsuser.isLoggedIn =true;
// console.log(jsuser)
jsuser.greeting = function(){
    console.log('Hello JS user');
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user,${this["full Name"]}`);
}

jsuser.greeting();
jsuser.greetingTwo()