// const promiseOne= new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complte');
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async 2 complete');
//         resolve();
//     })
// }).then(function(){
//     console.log("Promise 2 consumend");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"navneet", email:"navneet@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"navneet",password:"123"})
//         }
//         else{
//             reject("something went wrong");    
//         }
//     })
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The promise is either resolve or rejected"))

// async function promiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// promiseFive()

// async function getAllusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error); 
//        }

// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})


