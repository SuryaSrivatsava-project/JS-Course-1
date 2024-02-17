// encapsulation of user properties in Object
const userOne = {
    email:'ryu@ninjas.com',
    userName:'ryu',
    login(){
        console.log(`${this.email} has logged in`);
    },
    logout(){
        console.log(`${this.email} has logged out`);
    }
}
console.log(userOne.userName);
userOne.login()
userOne.userName = 'Yoshi';
console.log(userOne)
// accessing using []
console.log(userOne['login']());
let prop = 'userName';
console.log(userOne[prop]);