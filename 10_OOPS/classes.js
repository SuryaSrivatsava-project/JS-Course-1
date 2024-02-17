// Creating muliple instances of an object using Classes
// Classes are syntactic sugar of Prototypes

// Constructor Functions creates the new Object based on Class template
/*
function User(name,email){
    this.name=name;
    this.email= email;
    this.login= function(){
                console.log(`${this.email} has logged in`)
            },
    this.logout= function(){
                console.log(`${this.email} has logged out`)
            }
}
const userOne = new User('Surya','Surya@gmail.com');
const userTwo = new User('Abhi','Abhi@gmail.com');
console.log(userOne);
console.log(userTwo);
*/

class User{

    constructor(userName,email){
        this.name = userName,
        this.email = email,
        this.score = 0;
    }

    login(company){
        console.log(`${this.email} has logged in to ${company}`);
        return this;
    }
    logout(){
        console.log(`${this.email} has logged out`);
        return this;
    }
    increaseScore(){
        this.score++;
        console.log(`Score of ${this.name} is ${this.score}`);
        return this;
    }
}
const userOne = new User('Surya','Surya@email.com');
console.log(userOne);
userOne.login("CTS")
userOne.increaseScore();
userOne.increaseScore();
userOne.increaseScore();
// method chaining we return this 
userOne.login().increaseScore().increaseScore().logout();
/*
constructor(param,param2){
    this.name = param1;
    this.email = param2;
}
methods are created outside the constructor
 the new Keyword
 1. creates a new empty Object {}
 2. sets the value of this to the empty object
 3. calls the constructor method
*/