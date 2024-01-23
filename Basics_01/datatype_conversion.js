//Number in a string to Number
let score="33"
console.log(typeof score)

let valueToNumber= Number(score)
console.log(typeof valueToNumber)



//Number with a text to Number
let score1="33abc"

let valueToNumber1=Number(score1)
console.log(typeof valueToNumber1)

console.log(valueToNumber1) //NaN



//Changing to null to Number
let score2=null

let valueToNumber2=Number(score2)
console.log(typeof valueToNumber2)

console.log(valueToNumber2) //0


//changing undefined to Number
let score3=undefined

let valueToNumber3=Number(score3)
console.log(typeof valueToNumber3)

console.log(valueToNumber3) //NaN



//changing boolean to number
let score4=true

let valueToNumber4=Number(score4)
console.log(typeof valueToNumber4)

console.log(valueToNumber4) //1



//changing string to number
let score5="Mohak"

let valueToNumber5=Number(score5)
console.log(typeof valueToNumber5)

console.log(valueToNumber5) //NaN



/* 
    "33"=> 33
    "33abc"=> NaN
    null=> 0
    true=>1/false=>0
    undefined=>NaN
    "Mohak"=>NaN

*/



let number=0
let numberBoolean=Boolean(number)

console.log(numberBoolean) //false


let number1="mohak"
let num1Boolean=Boolean(number1)

console.log(num1Boolean) //true


let number2=""
let num2Boolean=Boolean(number2)

console.log(num2Boolean) //false

/*
    1=> true 
    0=> false
    "mohak"=> true
    ""=> false
*/

//Other conversion vice-versa