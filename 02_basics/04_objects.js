const tinderUser = new Object();
// const user = {};
// console.log(user);
tinderUser.id = '123abc';
tinderUser.name = 'Sammy';
tinderUser.isLoggedIn = false;
const regular_User = {
    email:'some@gmail.com',
    fullName:{
        userFullName:{
            firstName:'Surya',
            lastName:'Srivatsava'
        }
    }
}
// console.log(regular_User.fullName.userFullName);
// Optional Chaining
// console.log(regular_User.fullName?.userFullName);
// console.log(tinderUser);

// merging objects
const obj1 = {1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};
// const obj3 = {...obj1,...obj2};
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3 === obj1)

const users = [
    {id:1,username:'sample@email.com'},
    {id:1,username:'sample@email.com'},
    {id:1,username:'sample@email.com'},
    {id:1,username:'sample@email.com'},
]
console.log(users[0].username);
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // [keys]
console.log(Object.values(tinderUser)) //[values]
console.log(Object.entries(tinderUser)) // [key,value]

console.log(tinderUser.hasOwnProperty('id'))

