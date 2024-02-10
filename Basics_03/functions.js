function sum(number1, number2){
    return number1+number2
}
function addTwoNumbers(number1,number2){
    console.log(`Sum: ${number1 + number2}`)
}

addTwoNumbers(1,3) //Using void function to print the result only
const  result2 = addTwoNumbers(4,7); //This will also print the value. It works on JS but not on programming languages like C, C++
const result = sum(1,2) 
console.log(result) //Using return value 


function loggedUserName(name){
    return `The username is ${name}`
}
function updatedUserName(name){
    if(!name){
        return `Please enter a name`
    }else{
        return `The username is ${name}`
    }
}
function defaultName(defaultName = "John Doe"){
    return `Default Name is ${defaultName}`
}

console.log(loggedUserName("Mohak")) //The username is Mohak
console.log(loggedUserName("")) // The username is 
console.log(loggedUserName())   // The username is undefined
console.log(updatedUserName("John Doe")) // The username is John Doe
console.log(updatedUserName("")) // Please enter a name
console.log(defaultName("Mohak")) // Default Name is Mohak
console.log(defaultName()) //  Default Name is John Doe

