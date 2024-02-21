//Basic conditions We all know 
//Like if else and another
//Things that we need to remember are the operator which ar AND(&&) and OR(||) and it's working that's easy

//The new things are:


//Nullish Coalescing Operator (??): null undefined
let a = null ?? 10 //10
a = undefined ?? 15 //15
a= "" ?? 12 //""(Because it doesn't provide any null value) 
console.log(a)

/*It's basically used for error handling. Like someone's pfp is not working or showing error , so instead of giving an error you can use this operator
.*/


//Ternary operator (A substitute for if-else)
//condition ?  exprIfTrue : exprIfFalse;
a=12
const b=(a>=10) ? console.log("a is greater than 10") : console.log("It's not")


//How to find out if a object is empty or not
const obj1={}
if(Object.keys(obj1)==0){
    console.log("Object is empty")
}

//There is an operator you specifically need to know is these two - "==" and "==="
//Basically "==" compares the value of both the operands. (ex: 1=='1'(Not true))
//and '===' compares both the value as well as the type of the variables.(ex: 1==='1'(isTrue))
