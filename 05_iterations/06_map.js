const myNums = [1,2,3,4,5,6,7,8,9,10];
// map()
// returns after performing an operation as an array
// const newNums = myNums.map(function(value,index,arr){
//     return value+10;
// })
// console.log(newNums)

// method chaining
const newNums = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40);
console.log(newNums)