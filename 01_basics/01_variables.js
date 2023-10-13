const accountId= 144553
let accountEmail="navneetmishra943@gmail.com"
var accountPassword="12345"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountCity="Surat"

let accountState;

//accountId=123 //not allowed
accountEmail="navneet@gmail.com"
accountPassword="5678"
accountCity="mumbai"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
