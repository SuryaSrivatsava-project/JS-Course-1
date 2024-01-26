const marvel_heros = ['Thor','Ironman','Spiderman']
const dc_heros = ['Batman','Superman','Flash']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)
// spread operator
// marvel_heros.push(...dc_heros);
// console.log(marvel_heros)

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros)

// flat 
const another_array = [1,2,[3,4,5],6,7,[8,9,[10]]];
const realArray = another_array.flat(Infinity);
console.log(realArray)

console.log(Array.isArray("Surya"))
console.log(Array.from("Surya"))
console.log(Array.from({name:'demo'})); // doesn't make an array this way because JS want to make array out of 

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))
console.log(Array.of({name:'demo',age:23},{name:'sample',age:20}))

