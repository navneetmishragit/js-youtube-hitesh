const myNum=[1,2,3,4,5]

const myTotal=myNum.reduce((acc,currvalue)=>{
    console.log(`acc:${acc} currval:${currvalue}`);
    return acc+currvalue;
},0)

console.log(myTotal);