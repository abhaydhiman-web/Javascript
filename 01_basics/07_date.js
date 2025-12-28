let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());
// // Sun Dec 28 2025 12:05:42 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());
// // Sun Dec 28 2025

// console.log(myDate.toLocaleString());
// // 28/12/2025, 12:05:42 pm   

// console.log(myDate.toISOString());
// // 2025-12-28T06:35:42.123Z

// console.log(myDate.getFullYear()); // 2025
// console.log(myDate.getMonth() + 1);    // 0–11 (Jan = 0)
// console.log(myDate.getDate());     // Day
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getTime());



// let myCreateDate = new Date(2023, 0, 23);
// console.log(myCreateDate.toDateString());

// let myCreateDate1 = new Date("2023-01-23");
// console.log(myCreateDate1.toLocaleString());

// let myCreateDate2 = new Date("02-11-2023");
// console.log(myCreateDate2.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Date.now());
console.log(Math.floor(Date.now()/1000));


let newDate4 = new Date();
newDate4.toLocaleString('default', {
    weekday : "long"
})




