const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8527;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));  // default: US standard

// Number has its few properties (values)



/* ---------------- Maths library (default) ---------------- */

/* console.log(Math);
console.log(Math.abs(-13));
console.log(Math.round(7.5));
console.log(Math.ceil(6.2));
console.log(Math.floor(3.9));
console.log(Math.min(34, 46, 67, 76, 58));
console.log(Math.max(34, 46, 67, 76, 58)); */

/* console.log(Math.random()); // random number between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); */

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);