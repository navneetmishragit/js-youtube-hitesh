const marvel_heroes=["thor","caption america","iron man"]
const dc_heroes=["superman","flash","batman"]

// const all_new_heroes=marvel_heroes.concat(dc_heroes)

// console.log(all_new_heroes)

const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],7,[8,[9,10]]]

const new_another_array=another_array.flat(Infinity)
console.log(new_another_array);

console.log(Array.isArray("NAVNEET"));
console.log(Array.from("NAVNEET"));
console.log(Array.from({name:"NAVNEET"}));//interesting for inteview perspective


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
