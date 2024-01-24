/*
    Stack memory is defined on primitive datatypes
    Heap memory is defined on non-primitive datatypes


    stack creates a copy of values one by one. It store static data

    Heap creates memory which stores dynamic data. If you creates an object and you changed it accordingly
    it'll dynamically change it's original value
*/

//STACK
let email="mohak123@google.com"

CopyEmail=email; //if you store this data in this variable then it'll create a copy of email,it'll not change the value of actual email
CopyEmail="hello@google.com"

console.log(CopyEmail) //hello@google.com
console.log(email); //mohak123@google.com



//Heap
let userOne = {
    name: "Mohak"
}

userTwo=userOne
userTwo.name="Gourav"

console.log(userOne.name) //Gourav
console.log(userTwo.name)//Gourav


                                                                                                            