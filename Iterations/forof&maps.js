const myArray=[12,0]
for(const value of myArray){
    console.log(value);
} //Basically stores a value of the given element

const obj1={
    name: "Mohak",
    Roll: 34
}
// for(const element of obj1){
//     console.log(element); //Objects are not iterable
// }

//Maps:
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.
// Basically holds a unique and non repeating value and it is iterable.

const map = new Map()
map.set('Mohak', "Backend Dev")
map.set('Soumasish', "Frontend Dev")
map.set('Debtanu', "Designer")
console.log(map)

//Now if you want to destructure it and use it in for of 
for(const key of map){
    console.log(key)//It shows data in an array
}
//But if we destructure it 
for(const [key,value] of map){
    console.log(key,":",value)//It shows data in an array
}