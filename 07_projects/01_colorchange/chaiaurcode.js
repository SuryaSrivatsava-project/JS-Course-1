const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(e){
    console.log(e);// whole event object
    console.log(e.target); // target Element
    body.style.backgroundColor = e.target.id;
})
})