// Call, Apply and Bind (Sharing methods in Object)
let name1 = {
    firstName:'Surya',
    lastName:'Srivatsava',
    printFullName:function(hometown){
        console.log(`${this.firstName} ${this.lastName} from ${hometown}`);
    }
}

name1.printFullName('india')
const name2 ={
    firstName:"sachin",
    lastName:'tendulkar'
}
// Function borrowing Note: properties name should be same
// call(refernce,argtofunc) -> immediately calls the function with execution context with respect to defined object
name1.printFullName.call(name2,"India")

// apply method
// difference between call and apply method is way to pass args
name1.printFullName.apply(name2,["India"]);

// bind method
// bind method binds the method with the object and returns the copy of the method
// can be used to trigger a function on button click with respect to an object
const printName = name1.printFullName.bind(name2,["India"]);
console.log(printName);
printName();

// Here in event listener, the this points to button not Person Object
// so we use bind

var Person = {
    name: 'Sam',
    sayName: function(){
      console.log('My name is '+ this.name);
    }
  };
  document
    .getElementById('test')
    .addEventListener('click', Person.sayName.bind(Person));
  // 'My name is Sam'