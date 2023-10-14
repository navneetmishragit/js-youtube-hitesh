//singleton
//object constructors

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"NAVNEET",
    age:25,
    location:"SURAT",
    email:"navneet@google.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Tuesday"],
    [mySym]:"myKey1"
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="navneet@oracle.com"
// Object.freeze(JsUser)
JsUser.email="navneet@micro.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());