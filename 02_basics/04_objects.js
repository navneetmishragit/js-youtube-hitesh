// const tinderUser=new Object()
const tinderUser={}

// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="navneet"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    name:"navneet",
    email:"abc@gmail.com",
    users:{
        user1:{
            fullname:{
                firstname:"navneet",
                lastname:"mishra"
            }
        }
    }
}

// console.log(regularUser.users.user1.fullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

const obj4=Object.assign({},obj1,obj2,obj3)

const obj={...obj1,...obj2}

// console.log(obj4);
// console.log(obj);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course={
    corsename:"JS",
    price:999,
    courseInstructor:"hitesh"
}

const {courseInstructor:instructor}=course

console.log(instructor);