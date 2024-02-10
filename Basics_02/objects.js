// Object.create /* This is call constructure method  and this uses singleton (More knowledge after)*/

//Declaring a symbol
const sym = Symbol("key");
//Object literals
const obj1 = {
    name: 'John',
    age: 30,
    [sym]: "This is value of the symbol", //Accessing the symbol using [sym]
    "Full Name": "John Doe",
}; //This is call the normal way of creating an object in JavaScript

//There are two ways of calling an object
console.log(obj1.name); //Normal Way
console.log(obj1["Full Name"]) //Another way 
console.log(obj1[sym])

obj1.email= "Hello WOrld@" //updating or changing a value
console.log(obj1)

// Object.freeze(obj1); //Freezing the object means that you can't add ,change or remove any property from it .It becomes read only

obj1.email="Mohak@gmail.com"
console.log(obj1);

//Objects with functions
obj1.greetings = function()
{
    console.log(`Hi! My name is ${this.name}`) //use this to access the same object
}
console.log(obj1.greetings()) //What's inside the function
console.log(obj1.greetings) //[Function (anonymous)]