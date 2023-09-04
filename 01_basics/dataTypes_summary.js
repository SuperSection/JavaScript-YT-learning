/* Primitive DataTypes
    7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/

/* Reference (Non Premitive) DataTypes
    Array, Object, Function
*/

/* JavaScript is a dynamically typed language, 
which means that data types of variables are determined by the value they hold at runtime 
and can change throughout the program as we assign different values to them */


let userEmail; // undefined, while not initialized with value
const outsideTemp = null  // typeof -> object
let num = 2023.5  // typeof -> number
const myLove = "Misty Pagli" // typeof -> string


const id = Symbol('510')
const anotherId = Symbol('510')
// console.log(id === anotherId);
console.log(typeof id); // -> symbol


const bigNumber = 3456792199462847398n;
console.log(typeof bigNumber);
console.log(bigNumber);


// Array
const heros = ["iron man", "spiderman", "captain america", "scarlet witch", "thor"]
console.log(typeof heros); // -> object

// Object
const myObj = {
    name: "Pagol",
    age: 18,
}
console.log(typeof myObj) // -> object

// Function
const myFunc = function() {
    console.log("Love you so PAGLI");
}
console.log(typeof myFunc) // -> Object function
