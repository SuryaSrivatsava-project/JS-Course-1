//Sort -> It converts the elements to strings
// Scenarios
// 1. < 0 .... a comes first
// 2. 0 ...... nothing will be changed
// 3. > 0 .... b comes first

// if a value is less than b , a comes before b
// if a value is greater than b , b comes before a

// const arr = [5,2,1,3,45,5,20];
// arr.sort(function(a,b){
//     if(a>b){
//         return -1;
//     }
//     else if(a<b){
//         return 1;
//     }
//     else{   
//         return 0;
//     }
// })
// other way

// arr.sort(function(a,b){
//    return a-b; ascending order
//    return b-a; descending order
// })
// console.log(arr);

// sorting arr of objects

const ages = [
    {name:'Vinay',age:30},
    {name:'Pradeep',age:27},
    {name:'Surya',age:26},
]
ages.sort(function(a,b){
    return a.age - b.age;
})
console.log(ages)