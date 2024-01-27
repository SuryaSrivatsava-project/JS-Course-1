// forEach(item,index,array) is also an higher order function
const coding = ["JS","CPP","C","Python","Ruby"];
/*
function displayCourses(course){
    console.log(course)
}

coding.forEach(function(i){
console.log(i)
})

coding.forEach((val)=> console.log(val))
*/

coding.forEach((value,index,arr)=>{
    console.log(value,index,arr);
})

const myCoding = [
    {
        languageName:'JavaScript',
        languageFileName:'js'
    },
    {
        languageName:'Java',
        languageFileName:'java'
    },
    {
        languageName:'Python',
        languageFileName:'py'
    }
]

myCoding.forEach((val)=>{
    const {languageFileName,languageName} = val;
    console.log(languageFileName,languageName)
})