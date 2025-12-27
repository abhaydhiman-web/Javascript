var x = 10;
var x = 20;   // allowed
x = 30;       // allowed

console.log(x); // 30

// problem
if (true) {
    var a = 5;
}
console.log(a); // 5 (unexpected behavior)


let x = 10;
x = 20;   // allowed

// let x = 30;  error

if (true) {
    let a = 5;
}
console.log(a); //  Error (block scope)


const x = 10;
// x = 20;  error


