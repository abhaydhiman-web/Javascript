// Array

const myArr = [2,4,32,5,5,6];
const myHeroes = ["shaktiman", "nagraj"];

const myArr2 = new Array(2,5,3,233);
console.log(myArr2);

myArr2.push(96);
myArr2.pop(96);

myArr2.unshift(12);
myArr2.shift();

console.log(myArr2.includes(5));
console.log(myArr2.indexOf(3));

console.log(myArr2);

const newArray = myArr2.join();

console.log(myArr2)
console.log(typeof(myArr2));

console.log(newArray);
console.log(typeof(newArray));

let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)


let arr1 = [1, 2, 3, 4, 5];

arr1.splice(1, 2);

console.log(arr1); // [1, 4, 5]
