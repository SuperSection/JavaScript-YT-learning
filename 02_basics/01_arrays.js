// Array declaration

const myArr = [0, 1, 2, 3, 4, 5]
const myLove = ["Shona", "Misty", "Pagli", "Dustu"]

const myArr2 = new Array(5, 11, 7, 19)
/* console.log(myLove);
console.log(myArr2[3]); */


// Array methods

/* myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);
myArr.unshift(9)
console.log(myArr);
console.log(myArr.shift());
console.log(myArr); */

/* 
console.log(myArr.includes(9)); // exists in the array or not (true / false)
console.log(myArr.indexOf(8)); // if not present in the array -> -1
*/

const newArr = myArr.join()

/* console.log(myArr);
console.log(newArr);
console.log(typeof newArr); */

// slice v/s splice
/* console.log("A ", myArr);

const myNewArr1 = myArr.slice(1,3);

console.log(myNewArr1);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1,3);
console.log(myNewArr2);
console.log("C ", myArr); */
/* slice returns a piece of the array but it doesn't affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values */


/* ------------------------------------------------------------- */

const marvel_heros = ["Ironman", "Caption", "Spidey"]
const dc_heros = ["Superman", "Batman", "Flash"]

/* marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]); */

/* const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_heros = [...marvel_heros, ...dc_heros] // using spread operator
console.log(all_heros); */

/* const another_arr = [1,2,3,4,[9,8],6,[13,17,[25,32]]]
const flat_another_arr = another_arr.flat(Infinity)
console.log(flat_another_arr); */

/* console.log(Array.isArray("Pagol"));
console.log(Array.from("Soumo"));
console.log(Array.from({ name: "Super Section" })); */

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
