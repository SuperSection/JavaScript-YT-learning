// var c = 600
let a = 300 // have global scope

if (true)
{// local spcope
    let a = 10 // it's available only between the curly braces 
    console.log("INNER:", a);

    const b = 20
    c = 30
    // DON'T USE var, it causes more error and inconsistency in code
}

console.log(a);
// console.log(b);
// console.log(c);
