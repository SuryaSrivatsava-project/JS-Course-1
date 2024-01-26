const arr = [0,1,2,3,4,5,'demo',2.4];
const heroes = ['spiderman','shaktiman','He-Man'];
const myArr = new Array(1,2,3,4,5);
// Array methods
myArr.push(6)
myArr.push(7);
myArr.pop()
myArr.unshift(0)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9)) 
// const newArr2 = myArr.join(',')
// console.log(myArr)
// console.log(newArr)

// slice and splice
// slice returns the copy and does not modify the original array
console.log("A",myArr)
const myn1 = myArr.slice(0,4);
console.log("B",myn1)
// splice returns the deleted elements and if mentioned replaces them and modifies the original array
const myn2 = myArr.splice(0,4);
console.log(myn2)
console.log(myArr)


