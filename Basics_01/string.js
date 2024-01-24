
const me={
    name: "Mohak",
    profession: "Engineer"
}

//old ways of defining a string 
console.log("Hello my name is "+me.name+"and my profession is an "+me.profession)

//modern way of defining a string 
console.log(`My name is ${me.name} and my profession is ${me.profession}`)


//modern way of defining a string (basically used for the available functions attached with it)
let string = new String(`This is a string`) //For understanding it will make it like an array
console.log(string[0]) 
console.log(string.length)


//various prototypes or functions are available using the string you can access it or see it in the browser
//in the console define a string and then enter the string name which you declared it'll show all the prototypes you can create with it

//Like that some of the prototypes or functions examples are
console.log(string.toLocaleUpperCase())
console.log(string.toLocaleLowerCase())
console.log(string.charAt(10))
console.log(string.indexOf('s'))

const newString= string.substring(0,10)
console.log(newString)

const anotherString = string.slice(-10,20)
console.log(anotherString)

const trimString = new String(`        Mohak           `)
console.log(trimString.trimStart())
console.log(trimString.trimEnd())
console.log(trimString.trim())

const url= new String(`https://mohakgupta.com/hello%20world`)

console.log(url.replace('%20','-')) // replace
console.log(url.includes("mohakgupta", 0)); // searches something ("in the string area", from where it has to start) 

const variableForSplit = new String(`Mohak-Gupta`)
console.log(variableForSplit.split('-')) //change it into an array and defining where to make the change use the keyword inside it
