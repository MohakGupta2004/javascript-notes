
//Before changing the value

const accountId = 123123;
let email="abc@gmail.com"
let accountPass="1232mohak"
accountCity="Jaipur"

console.table([accountId,email,accountPass,accountCity])

//After changing the value

accountCity="Kolkata"
accountPass="mohak123"
email="mohak@gmail.com"
//accountId=098098 
//You can't do this here because it's a constant

console.table([accountId,email,accountPass,accountCity])


/*Never use var to define variable in javascript because it created a problem in functional scopes
and block scopes*/


let accountState;
console.log(accountState) //undefined, because we didn't defined it before