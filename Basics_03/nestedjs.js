function one() {
    const username="mohak"
    function Two() {
        const website= "github.com/mohak-Gupta";
        console.log(`Let's access the first one function because it's parent function so it's available to everyone 
        ${username}`)
    }
    Two()
    // console.log(website); //You can't access it, it'll show error
}

const addOne = function(num) {
    return num+1;
} //This way of defining function is called expression

console.log(addOne(5))
one()


//Hoisting - Basically you can't access a function before it's declaration if you are using an expression
// variable() - it'll show error
const variable = function(){
    console.log("I'm using this variable")
}

//But if you do it liike this

variable2()
function variable2() {
    console.log("You can access it now")
}