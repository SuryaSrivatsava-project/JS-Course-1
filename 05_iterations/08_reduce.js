// reduce(fn(acc,curr){},initialValue)Take group of values and reduce it to single value
// accumulator on each iteration updates itself to the calc of current iteration and returns it in next iteration
const pets = [
    {name:'Surya',numCats:2},
    {name:'Vinay',numCats:1},
    {name:'Pradeep',numCats:0},
    {name:'posh',numCats:3},
    {name:'prince',numCats:5}
]
const totalCats = pets.reduce(function(acc,curr){
    return acc + curr.numCats
},0)
console.log(totalCats)