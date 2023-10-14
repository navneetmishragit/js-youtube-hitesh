let myDate=new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,9,29)
// let myCreatedDate=new Date(2023,9,29,1,10)
let myCreatedDate=new Date("2023-10-29")
// let myCreatedDate=new Date(2023,9,29)

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log((newDate));

console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

let myDate2=newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(myDate2);