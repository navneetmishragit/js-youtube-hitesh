//for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting="Hello World!"
for (const greet of greeting) {
    if(greet==" "){
        continue;
    }
    console.log(greet);
}

// Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"United States of America")
map.set('Fr',"FRANCE")

console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}


// const myObject={
//     game1:"nfs",
//     game2:"pubg"
// }

// for (const key of myObject) {
//     console.log(key);
// }