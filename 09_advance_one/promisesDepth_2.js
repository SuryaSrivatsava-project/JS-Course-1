const cart = ["shoes","pants","kurta"];
// 1. Creating our own custom promises
const promise = createOrder(cart); // orderId returns
// console.log(promise)
promise.then(function(id){
    console.log(id);
    return id;
}).then(function(orderId){
    console.log(orderId)
    return proceedToPayment(orderId);
}).then((data)=>console.log(data)).catch(function(err){
    console.log(err.message);
    // this catch handles only above then
}).catch((e=>console.log(e))).then(function(orderId){
    console.log("Runs no matter what")
    
})

function createOrder(cart){
    // we return a promise from this
    // resolve and reject are functions provided by javascript
    const pr = new Promise(function(resolve,reject){
        // validate cart
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
       // logic to create an order
       const orderId = '12345';
       if(orderId){
        setTimeout(function(){
            resolve(orderId);
        },2000)
        // resolve(orderId);
       }

    });
    return pr;
}
function validateCart(cart){
    return true;
    // return false;
}

function proceedToPayment(orderId){
    // return new Promise((resolve,reject)=>{
    //     resolve(`payment successful ${orderId}`);
    // })
    // return `payment successful ${orderId}`
}