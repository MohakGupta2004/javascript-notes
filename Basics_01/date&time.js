const mydate = new Date()

console.log(mydate) //2024-02-04T07:07:06.852Z
console.log(mydate.toString()) //Sun Feb 04 2024 02:07:06 GMT-0500 (Eastern Standard Time) [Basically with time]
console.log(mydate.toDateString()) //Sun Feb 04 2024 [without time]
console.log((mydate.toISOString())) //2024-02-04T07:07:06.852Z
console.log( (mydate.toJSON())) // 2024-02-04T07:07:06.852Z


const myCretedDate = new Date(2012,0,2)
const myCretedDate1 = new Date(12,0,2)
/*
    Months are zero indexed so January is 0 and December is 11
    Year can be a full year or just the two digits if it's this century [by default it take 19th cen]
    format should be yyyy/(mm-1)/dd
*/
console.log(myCretedDate.toDateString());
console.log(myCretedDate1.toDateString());


const myCretedDate2 = new Date(12,0,2,0,5) //with more added details
console.log(myCretedDate2.toLocaleString()) //it adds more details here the 0 and 5 indicates  hours and minutes respectively[24h perspective]

const declaredDate = new Date("12-01-12") //it declares at the real time month format  "MM/DD/YY" [takes 20th cen as default]
console.log(declaredDate.toLocaleString())

const myTimeStamp = Date.now()
console.log(myTimeStamp) 
console.log(myCretedDate.getTime())
console.log(Math.floor(myTimeStamp/1000))


//Localestring can be more customized  with options
const newDate=myCretedDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: 'UTC',

})
console.log(newDate) //Monday