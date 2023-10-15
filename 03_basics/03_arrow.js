const user={
    username:"navneet",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to page`);
    }
}

user.welcomeMessage()
user.username="mishra"
user.welcomeMessage()

console.log(this);


// function coffee() {
//     let username="navneet"
//     console.log(this.username);
// }

// coffee()

// const coffee=function () {
//     let username="navneet"
//     console.log(this.username);
// }

// coffee()


const coffee= () =>{
    let username="navneet"
    console.log(this);
}

coffee()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2  //implicit return
const addTwo=(num1,num2)=>(num1+num2) 
// const addTwo=(num1,num2)=>({username:"navneet"})

console.log(addTwo(2,3));