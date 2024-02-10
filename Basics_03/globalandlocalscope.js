/*
    Why var is not used anymore, rather we use let? 
    But there a genuine question why? the answer is it doesn't maintain any scope basically with example. 
*/
let d=300 //This is global scope, we can access it anywhere
{
    let a=10
    const b=20
    var c=30 
} //We define a local scope here and now let's try to access it

// console.log(a) //Error
// console.log(b) //Error
console.log(c) //30 

//Basically that's why