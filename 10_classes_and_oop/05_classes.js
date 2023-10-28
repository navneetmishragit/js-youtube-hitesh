class users{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const users_output=new users("navneet","nav@gmail.com",123)
console.log(users_output.encryptpassword());
console.log(users_output.changeUsername());

//behind the scenes

function users_2(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

users_2.prototype.encryptpassword=function(){
    return `${this.password}abc`
}

users_2.prototype.chaneUsername=function(){
    return `${this.username.toLowerCase()}`
}

const user2_output= new users_2("NAVNEET","mishra@gmail.com","haha123")

console.log(user2_output.encryptpassword());
console.log(user2_output.chaneUsername());