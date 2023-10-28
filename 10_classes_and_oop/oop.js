const user={
    username:"navneet",
    email:"navneet@gmail.com",
    isLoggedIn:true,
    getUserDetails:function(){
        console.log("get details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const UserOne= new User("navneet",8,true)
const UserTwo = new User("ChaiAurCode", 11, false)
console.log(UserOne);
console.log(UserTwo);