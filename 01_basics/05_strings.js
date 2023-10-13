const name="navneet"
const repoCount=50

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('navneet-m')
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('v'));
console.log(gameName.charAt(2));
console.log(gameName.substring(1,8));
console.log(gameName.slice(-7,5));

const anotherString="    navneet     "
console.log(anotherString);
console.log(anotherString.trim());
const url="https://navneet.com/navneet%20mishra"
console.log(url.replace('%20','-'))
console.log(url.includes('hahah'))
console.log(gameName.split('-'))
