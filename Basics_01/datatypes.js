"use strict" //using this code as a newer version of js

//console.log(2+2) console.log("Mohak") [will give error]
console.log(2+2); console.log("mohak");//That's why we use semicolon, although what I did here is not a good practice
//Lesson: Try to use clean code


//alert(2+2) [This will not work in node js but will work in browser]


let age=20
let name="Mohak"
let isLoggedIn=true
let valueUndefined;
let valueNull=null
let symbol=Symbol('123')
let symbol2=Symbol('123')
/* 
    There are number of datatypes in javascript
        1. number => number types
        2. string => text type
        3. boolean => true/false
        4. undefined => which is not defined yet
        5. null=> simply means empty (ex: Imagine a weather app, if it didn't find any weather of a place
                                          So what will it use 0 or nothing. Yes that nothing is null)
        6. symbol => defining symbol, it creates unique values 
        7. object => a non primitive datatype

*/
console.log(typeof(valueUndefined)) //output: undefined
console.log(typeof(valueNull))//output: object

console.log(symbol==symbol2) //output false because both have different ID
//For more knowledge use documentation: MDN references, tc39(offcial ecmascript site[Ecma script is
//                                                         the organisation which defined standards for js])



const array= ["This","is","an","Array"]
const myobj= {
    name: "This Object",
    ID: 123,
    description: "Although it looks like JSON but it's not"
}

function helloWorld() {
    console.log("This is a function")
    console.log("Hello World")
}

helloWorld()