const arr = [1,2,3,4,5];

// for of loop
// for(const a of arr){
//     console.log(a);
// }
// const greetings = 'Hello World';
// for(const greet of greetings){
//     console.log(greet)
// }

// Maps
// it has key value pairs and maintains insertion order
// No duplicates are taken 
const map = new Map();
map.set('IN','India')
map.set('USA','United States Of America')
map.set('FR','France');
map.set('IN','India')
// we cannot use for in loop for maps
// console.log(map)

// for(const [key,value] of map){
//     console.log(key)
// }

// Objects are not iterable by default using for of loop
// const myObject = {
//     game1:'NFS',
//     game2:'GTA'
// }
// for(const [key,value] of Object.entries(myObject)){
//     console.log(key)
// }

const courses = {
    js:'Javascript',
    cpp:'C++',
    rb:'Ruby',
    py:'Python'
}

for ( const course in courses){
    console.log(courses[course])
}