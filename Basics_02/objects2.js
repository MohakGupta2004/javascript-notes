const facebook = new Object() //singleton object
const google = {} //Non singleton object

const microsoft = {
    email: "mohak@gmail.com",
    fullName:{
        userfullname:{
            firstName:"Mohak",
            lastName: "Gupta"
        }
    } //Nesting of the objects
}
console.log(microsoft.fullName.userfullname.firstName)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

const objMerge=Object.assign({},obj1,obj2,obj3);  //Merging three objects. The empty object is required because it's create a new object where it stores the values of other objects
const objMerge2 = {...obj1,...obj2,...obj3}


console.log(objMerge)
console.log(objMerge2)

// OBjects inside an array
const amazon=[
    {
        id: 1,
        email: "mohak@gmail.com"
    },
    {
        id: 2,
        email: "souvik@gmail.com"
    }
]

console.log(amazon[0].email)
console.log(Object.keys(amazon[0])) //Accsing the Keys
console.log(Object.values(amazon[1]))
console.log(Object.entries(amazon[1])) //Accesing the whole object
console.log(Object.hasOwnProperty(amazon[1].name))//Basically Search


// IF you want to know more about the objects properties then go to the console of the browser and create a object and it will show you the prototypes of objects