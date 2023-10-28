class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`a new course added by ${this.username}`);
    }
}

const user1=new Teacher("navneet","navneet@gmai.com",123)
user1.addCourse();

user1.logMe();

const user2=new user("mishra")

user2.logMe();
// user2.addCourse();

console.log(user1 instanceof user);
