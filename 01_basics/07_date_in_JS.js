// Dates

let myDate = new Date()
/* console.log(typeof myDate);
console.log(myDate);    // object
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString()); */


// let myCreatedDate = new Date(2023, 9, 5);
// let myCreatedDate = new Date(2023, 8, 9, 12, 20)
// let myCreatedDate = new Date("2023-01-17")  // as we want to input
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now()
// console.log(myTimestamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
/* console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); */

newDate.toLocaleString('default', {
    weekday: "long",
})
