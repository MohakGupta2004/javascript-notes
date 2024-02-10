//So how can we collect dynamic data as a parameter? 
function addToCart(num1){
    return num1
}

console.log(addToCart(200,500,1000)) //200
//SO how can we solve the problem. We need to use (...args) which means any number of arguments will be passed into this function and then we can make an array of it inside that value.
function addDataToTheCart(...num1){
    return num1
} 
function addDataToTheCart2(val1, val2, ...num1){ //Basically the first 2 value will be stored in thee val1 and val2
    return num1
}

console.log(addDataToTheCart(200,1900,325)) //[200,1900,325] 
console.log(addDataToTheCart2(200,123,2435,23525,43636)) //[ 2435, 23525, 43636 ]



//Functions With Object
const object1 = {
    id: 1,
    user: 'mohak'
}

function getObjectDetails(anyUser){
    console.log(`The id of the user is ${anyUser.id} and the name of the user is ${anyUser.user}`)
}

getObjectDetails(object1)
getObjectDetails({
    user: "Hero",
    id: 2
})


//Functions with Array
let arr1 = [1,2,3,4,5];
function myArray(anyArr){
    console.log(`The second value of the array is ${anyArr[1]}`)
}

myArray(arr1);
myArray([1,23,34,23,4,5]);