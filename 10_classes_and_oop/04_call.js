function setUserName(username){
    this.username=username;
    console.log("called");
}

function createUserName(username,email,password){
    setUserName.call(this,username);
    this.email=email;
    this.password=password;
}

const users=new createUserName("navneet","n@gmail.com",123)

console.log(users);