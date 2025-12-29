// for of loop

// [{}, {}];
// ["", ""];

const arr = [1,3,4,5,6];
for (const val of arr) {
    console.log(val);
}

const greeting = "Hello world";
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}


//Map

const map = new Map();
map.set('IN' , "INDIA");
map.set('USA', "UNITED STATES OF AMERICA");
map.set('FR', "FRANCE");

// console.log(map)

for (const [key, value] of map) { // [key , value] to destructure.
    console.log(key , ':-', value);
}

// but we cannot iterate on object like this.

const myObject = {
        game : "NFS",
        game2 : "SPIDERMAN",
    }

//     for (const [key, value] of myObject) {  // not possible
//         console.log(key , ':-', value);
// }

        for (const [key, value] of Object.entries(myObject)){ // In this way it is possible.
            console.log(key, value);
        }