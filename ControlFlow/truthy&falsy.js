/*There are some conditions in if-else statement which is defined as truth or false in the basis of 
conditions(IMP FOR INTERVIEW PURPOSES) */

// Some of the truthy values are: truth, 1, [], {},function(){},"0"
//Some of the falsy values are: false, 0,"", -0,null, undefined, BigInt On

// example
if ("") {
    console.log("This is a truthy value")
}
else{
    console.log("No it's not");// THis one executed
}

//Another example
if ([]) {
    console.log("This is a truthy value")// THis one executed
}
else{
    console.log("No it's not");
}

//HEREBY CHECK IT ON YOUR OWN
