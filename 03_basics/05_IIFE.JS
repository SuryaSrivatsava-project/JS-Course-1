// Immediately Invoked Function (IIFE)

(function chai(){
    console.log('sample')
})() // need to use ; after/before this IIFE is executed
console.log('sample');
(()=>{
    console.log('sample2')
})();

// parameter
((name)=>{
    console.log(name)
})('sample3')