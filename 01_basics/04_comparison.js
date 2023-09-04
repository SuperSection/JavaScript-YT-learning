/* console.log("2" > 1);
console.log(2 > "1"); */

/* console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); */
/* An equality check (==) and comparisons (>, <, >=, <=) work differently 
Comparison convert null to a number, treating as 0
That's why, null >= 0 is true and null > 0 is false */

// console.log(undefined == 0 || undefined > 0 || undefined < 0); // in ll three cases it gives false

// === -> Strictly check not only value but also the datatype
console.log("5" == 5);  // true
console.log("5" === 5); // false
