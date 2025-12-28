// Singleton
// Object.create

// Object Literals

const mySym = Symbol("Key1");

const jsUser = {
    name : "Yuvi",
    [mySym] : "myKey1",
    "full name" : "Yuvi Dhiman",
    age : 20,
    location : "Himachal Pradesh",
    email : "yuvid@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Friday"]
}

console.log(jsUser.name);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

// jsUser.email = "yuvidhiman@gmail.com";
// Object.freeze(jsUser);
// jsUser.isLoggedIn=  true;
// console.log(jsUser.isLoggedIn);

jsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsUser.greeting());