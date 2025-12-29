const coding = ["js", "ruby", "cpp", "java"];

// coding.forEach( function (val){
//     // console.log(val);
// })

// coding.forEach( (value) =>{
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);


let arr = ["wp","mp","cp","pp"];


arr.forEach( (item, index, brr) =>{
    console.log(item , index, brr);
})


const myCoding = [
    {
        langaugeName : "javascript",
        languageExtention : "js"
    },
      {
        langaugeName : "java",
        languageExtention : "java"
    },
      {
        langaugeName : "python",
        languageExtention : "py"
    }
]

myCoding.forEach( (language)=> {
    console.log(language.langaugeName, language.languageExtention)
})

// for each returns undefined by default