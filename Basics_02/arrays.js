/*
    Array is a collection of data  items that can be accessed by indices. 
    Array create a shallow copy of the actual data (means it stores it in a heap)

*/  

let myArr=[1,2,3,4,5]
let  newArr=myArr; //new array gets reference to same memory location as 'myArr'
newArr.pop()
console.log(newArr);//[1,2,3,4]
console.log(myArr);//[1,2,3,4]
console.log(myArr.join()) //make the whole array into a string



//Slice and splice

console.log("slice(b/w index 1 and 3): ",myArr.slice(1,3)) //[2,3]

console.log("Original Array: ",myArr)
console.log("Splice: ",myArr.splice(1,3))
console.log("Original Array: ",myArr)


//Slice  does not modify original array but returns a new one while Splice modifies the original array


