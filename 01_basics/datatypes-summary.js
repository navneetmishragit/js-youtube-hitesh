//Primitivve(call by value)

//7 type:: String,Number,Boolean,null.undefined,symbol,BigInt

//JS is dynamically typed language

//Reference(Non Primitive)

//Array, Objects, Functions

const heroes = ["shaktimaan","hero"]

const myObj={
    name:"navneet",
    age:25,
    occuptaion: "SDE"
}

const myFunction=function(){
    console.log("Hello World");
}




//******************************* */

//Stack(Primitive),  Heap(Non Primitive)

let myName="NAVNEET MISHRA"

let anotherName=myName;

anotherName="MISHRA"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"navneet@gmail.com"
}

let userTwo= userOne
userTwo.email="mishra@gmail.com"

console.log(userOne);
console.log(userTwo);

