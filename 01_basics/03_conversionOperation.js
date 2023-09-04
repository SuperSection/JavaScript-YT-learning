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

/* let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let testString = "Paglir Pagol";
let BooleanTestString = Boolean(testString)
console.log(testString, BooleanTestString)
// empty string ( "" [not " "] ) => false
// "pagol" => true
*/

/* Conversion to String */

/* let someNumber = 55
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber) */


/* ------------- OPERATIONS ------------- */

let value = 3
let negValue = -value;
// console.log(negValue);

// console.table([2+2, 2-2, 2*3, 2**3, 2/3, 2%3]);

let str1 = " love you "
let str2 = "Pagli"

let str = "I" + str1 + str2
// console.log(str);

/* console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3"); */

// console.log(3+4*5%3);

/* console.log(+true);
console.log(+""); */

/* let num1, num2, num3
num1 = num2 = num3 = 2+2 */ // never recommended ths type of coding practice

// `` -> template literals

/* let x = 3;
const y = x++;  // first stored then increamented

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;  // first increamented then stored

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4" */
