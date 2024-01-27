// nested scopes
function one(){
    const username = 'Surya';

    function two(){
        const website = "youtube";
        console.log(username);
    }

    // console.log(website);
    two();
}
one();

/* 
Closures
 1. For Inner function whenever its declared and called a seperate call stack is created or a scope is created.
 2. Even after outer function is executed it still preserves vaariables in inner function
 3. Closure -> inner function + variables in lexical scope (outer scope)
*/

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a =100; // here now a is 100 function refers to a's reference not value so its 100
    return y;
}
const z = x();
// suppose thousands of lines are present
// Here x is already executed and removed from call stack and z contains function definition of y
// However executing z is calling y function and prints 7 so y along with its lexical scope (closure) is returned
z()

function ab(){
    let s = 100
    function x(){
        var a = 7;
        function y(){
        console.log(a,s); // forms closure from parent and its parent
        }
        y()
    }
    s = 200;
    x();
}

if(true){
    const username = 'Surya';
    if(username === 'Surya'){
        const website = 'youtube'
        console.log(website + username)
    }
    // console.log(website);
}
// console.log(username);


// Function types
//Declaration
console.log(addone(1));
function addone(num){
    return num+1
}
// Expression
// console.log(addTwo(2)) // cannot access here using expression
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(2));