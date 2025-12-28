// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = true;

console.log(tinderUser);

const regularUser = {
    email : "@gmail.com",
    fullname : {
        userfullname : {
        firstname : "yuvi",
        lastname : "dhiman"
    }
}
}

console.log(regularUser.fullname?.userfullname.firstname);

const a = {1 : "a", 2 : "b"};
const b = {3 : "C", 4 : "d"};

const c = Object.assign({}, a,b);
console.log(c);

const obj3 = {...a, ...b};
console.log(obj3);

const user = [
    {
        id : 1,
        email : "uv@gmail.com",
    },
    {
        id : 2,
        email : "vu@gmail.com",
    }
]

// user[1].email;

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "JavaScript",
  courseInstructor: "Hitesh",
  price: 999
};

const { courseInstructor: instructor } = course;

console.log(instructor); // Hitesh


 

