//if

const isLoggedIn=true
const temperature=41

// if(temperature===41){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

//<,>,<=,>=,==,!=,===.!==

const balance=1000
// if(balance>200) console.log("test"), console.log("test2");


const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromGmail=true

if(userLoggedIn && debitCard&&2==2){
    console.log("allow user");
}

if(loggedInFromGmail||loggedInFromGoogle){
    console.log("logged in");
}