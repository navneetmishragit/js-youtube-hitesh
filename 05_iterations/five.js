const coding=["js","ruby","java","c++","python"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        laguageFileNmae:"js"
    },
    {
        languageName:"python",
        laguageFileNmae:"py"
    },
    {
        languageName:"java",
        laguageFileNmae:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})