// Dates
// Months start from 0 - 11
const myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

// Declaring Dates
// let myCreatedDate = new Date(2024,0,23);
// let myCreatedDate = new Date(2024,0,23,5,3,23);
// let myCreatedDate = new Date("2024-01-24");
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString())
// // international API
    // let dt = new Intl.DateTimeFormat('en-US',{weekday:"long",month:'long',year:'numeric'}).format(myDate);
    // console.log(dt)

// Timestamps

let myTimeStamp = Date.now();
// console.log(myTimeStamp)// in ms from 1st JAN 1970 till now
// console.log(myCreatedDate.getTime())// returns ms from 1st JAN 1970 to the date
let newDate = new Date();
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getDate());
//Another way of internationalization
console.log(newDate.toLocaleString('default',{weekday:'long'}))
console.log(newDate)