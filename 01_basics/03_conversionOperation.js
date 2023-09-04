/* Conversion to Number */

let score = "33";   // easily get converted to 33
let score_ = "33abc"; // Not a Number (NaN -> type 'Number')
let _score = null;  // converted to 0
let undf = undefined; // converted to NaN
// true => 1;   false => 0 [in Number conversion]

/* console.log(typeof(score))
console.log(typeof score_)
console.log(typeof(_score))

let valueInNumber = Number(score)
let valueInNumber_ = Number(score_)
let _valueInNumber = Number(_score)
let undfInNumber = Number(undf);

console.log(typeof valueInNumber)
console.log(valueInNumber)

console.log(typeof(valueInNumber_))
console.log(valueInNumber_)

console.log(typeof _valueInNumber)
console.log(_valueInNumber)

console.log(undfInNumber) */


/* Conversion to Boolean */

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let testString = "Pagol";
let BooleanTestString = Boolean(testString)
console.log(BooleanTestString)
// empty string ( "" [not " "] ) => false
// "pagol" => true


/* Conversion to String */

let someNumber = 55
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)