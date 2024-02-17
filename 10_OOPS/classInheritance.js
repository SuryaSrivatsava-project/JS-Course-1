class User{

    constructor(userName,email){
        this.name = userName,
        this.email = email,
        this.score = 0;
    }

    login(){
        console.log(`${this.email} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.email} has logged out`);
        return this;
    }
    increaseScore(){
        this.score++;
        console.log(`Score of ${this.name} is ${this.score}`);
        return this;
    }
}

let users = ['userOne','userTwo','userThree'];
class Admin extends User{
    constructor(name,email){
        super(name,email); // used to call constructor of parent
    }
    deleteuser(userName){
        users = users.filter((user)=>user!=userName)
    }
    displayuser(){
        console.log(users);
    }
}
const adminOne = new Admin("Surya",'Surya@admin.com');
adminOne.deleteuser('userTwo');
adminOne.displayuser();