let score = "33"
let s = null

console.log(typeof(score));
console.log(s);


let valueInNumber = Number(score);

console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => Nan
// true => 1; false = 0

let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// 1 => true
// " " => false
// "yuvi" => true

let aNumber = 33
let stringNum = String(aNumber);

console.log(stringNum)
console.log(typeof stringNum);


// operations

let val = 3;
let negVal = -val;
console.log(negVal);


let str1 = "hello";
let str2 = " Yuvi"
let str3 = str1+str2;
console.log(str3);

let a = "1";
let b = 2;
console.log(a+b);

console.log("1" + 2 + 2);
console.log(1 + 2 + "3");

console.log(true);
console.log(+true);
console.log(+"");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);