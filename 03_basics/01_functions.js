function myName(){
    console.log("N");
    console.log("A");
    console.log("V");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
}
myName()

function addTwoNumber(number1,number2){ //parameter
    console.log(number1+number2);
}
addTwoNumber(2,5); //arguments

function addThreeNumbers(num1,num2,num3){
    let result=num1+num2+num3;
    return result;
}

const result=addThreeNumbers(2,3,4)
console.log(result);

function isLoggedIn(username){
    if(!username){  //if(username===undefined)
        console.log("Please enter username");
    }
    return `${username} just loggged in`
}

// console.log(isLoggedIn("NAVNEET"));
// console.log(isLoggedIn())


function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400))

const user={
    username:"NAVNEET",
    email:"navneet@gmail.com"
}

function hanldeObject(anyObject){
    console.log(`username: ${anyObject.username} & email: ${anyObject.email}`);
}

hanldeObject(user)

const myNewArray=[100,200,300]

function returnArrayValue(anyArray){
    console.log(anyArray[2]);
}

returnArrayValue(myNewArray)



