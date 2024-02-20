/* "this" is used to refer objects in current context, Basically if we hardcoded a value in a object
but someone changed it manually and so we want to change the hardcoded value, using the keyword this
can help with it because it associates with the property not the value.*/

//First let's create an object
const person = {
    name: "mohak",
    college: "TIU",
    introduction: function intro(){
        console.log(`HEllo I'm ${this.name} and I'm from  ${this.college}`);
        console.log(this)
    }
}

console.log(person.introduction()); // Output : HEllo I'm mohak and I'm from TIU
/*Now let's say some one else comes along and changes the value of name property */
person.name="John";
console.log(person.introduction()); // Output : HEllo I'm John and I'm from TIU

console.log(this) //{}
//If we do the same in browser  then output will be Window{...}, as 'this' refers to window object

function thisFunction(){
    let name="Mohak"
    console.log(this.name)
}
thisFunction() //Output : undefined, because it works only for objects

// function thisFunction(){
//     console.log(this) //Try it yourself
// }

// const test=function(){
//     console.log(this) 
// }

//Without using the function keyword we can simply use arrow function
//The difference between arrow function and function is -
const test1=()=>{
    console.log(this) //{}
}


//"this" refers to the object where the function is defined.
//Basically - 
const obj1={
    username:'Mohak',
    roll: 21,
    accessRole: function rol1(){
            setTimeout((function rol2(){
            console.log(this.username) //it'll show undefined because here this referes not the object but the function he's in
            }),500);

            //To fix the problem we can use arrow function
            setTimeout(() => {
                console.log(this.username)//Mohak
            }, 500);
    }
}
obj1.accessRole()


//Implicit Return
const implicitReturn=(num1,num2)=> num1 + num2
const objectReturn = (x,y)=> ({x:"Mohak",y:"Hello"}) //if you're using implicit return and you're return object then you'll always have to return it in parenthesis

console.log(implicitReturn(1,2));
console.log(objectReturn());
