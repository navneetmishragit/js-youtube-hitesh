//immediately invoked function expression(IIFE)

(function dbCheck(){
    console.log("DB CONNECTED");
})();

((name)=>{
    console.log(`${name}, 2nd DB CONNECTED`);
})("superb")