// For Primitive types value is stored in stack
// A copy is returned if the same variable is assigned to another variable not the reference
// Change in other variable does not affect the original

let a = 1,b;
b = a;
b =2;
console.log(a);
console.log(b);

// For Reference types value is stored in heap and the variable is stored in stack with reference to value in heap
// Entire reference is returned if the same variable is assigned to another variable 
// Change in other variable affect the original

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.length = 0
console.log(arr1) // []
console.log(arr2) // []