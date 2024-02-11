/** Promises
 * Promises are used to handle async operations
 * Rather passing a function as arg or as a callback we attach callback function to Promise object using this
 * They are immutable
 */

const cart = ["shoes","pants","kurta"];
// To write in callbacks, we wrap the function inside a function and pass to responsible function
function createOrder(cart,callback){
    callback(cart)
}
createOrder(1,proceedtoPayment)
function proceedtoPayment(id){
    console.log(id)
}
// Promises
const promise = createOrder(cart); // this returns a promise
promise.then(function(orderID){
    proceedtoPayment(orderID);
})

// Always return a promise chain

createOrder(cart).then(function(orderID){
    return proceedtoPayment(orderID)
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo)
}).then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
})
//Interview questions
/**
 * what is a promise?
 * Its an object which represents eventual completion of Async Operation
 * States of promise?
 * Pending, Fulfilled and rejected
 *  

 */

