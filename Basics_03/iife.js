//IIFE = Immediately Invoked Function Expression 
/*IIFE(iffy) is an expression where we want to execute a function right after it's being created.
Like creating a database and running it as soon as we defined it then we'll use IIFE. 
Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables.
If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression. 
*/

//How to declare it?
(function hello(){
    let variable=1;
    console.log(`the given variable which will be disposed after the run is ${variable}`)
})();

//To distinguise between two different IIFE we need to add semicolon after each function defined.
(function database(){
    console.log(`database is connected`);
})();
//Now it'll show no error
((expression)=>{
    console.log(`New ${expression} function using arrow function`)
})('IIFE');