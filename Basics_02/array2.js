//Problem with merge
arr1=[1,2,3]
arr2=[4,5]

// arr1.push(arr2)
// console.log("Merged array is : ", arr1); //Output:  Merged array is : [1, 2, 3,[4,5,6]] 
//Expected output:  [1, 2, 3, 4, 5, 6]

// const newArr=arr1.concat(arr2)
// console.log(newArr) // Output:  [1, 2, 3, 4, 5, 6]

const newArr=[...arr1,...arr2] //spread method
console.log(newArr)

//flat method
const flatArr=[1,2,3,[4,5],6,7,8,[9,10,[11,12,[13,14,[15]]]]]

console.log(flatArr.flat(Infinity)) //Output:  [1, 2, 3, 4, 5, 6, 7,....,15]

//isArray
console.log(Array.isArray("Mohak")) //False
//make it an array
console.log(Array.from('Mohak'))//Output: [ 'M', 'o', 'h', 'a', 'k' ]
//What will happen if I make it an object
console.log(Array.from({name:"Mohak"})) //Output: []


//of method
let str="Hello World"
let str2="My name is"
let str3="Mohak"

console.log(Array.of(str,str2,str3)) //Output : [ 'Hello World', 'My name is', 'Mohak' ]