const name = "Yuvi";
const age = 20;

console.log(`My name is ${name} and age is ${age}`);


const gameName = new String("clashOfClans");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('O'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


const newStringOne = "  hello  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const URL = "https://localhost.com/-20accounts";

console.log(URL.replace('%20', '-'));

console.log(URL.includes('local'));



