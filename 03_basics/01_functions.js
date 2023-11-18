function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("P");
  console.log("E");
  console.log("R");
}

sayMyName; // reference of the function
// sayMyName(); //execution of the function

/*
function addTwoNumbers(number1, number2){ // parameters
    console.log(number1 + number2);
}
const result = addTwoNumbers(5, "4") // arguments
console.log("Result:", result);
*/

function addTwoNumbers(number1, number2) {
  // parameters

  /*let result = number1 + number2;
    return result;*/
  return number1 + number2;

  console.log("SuperSection"); // after return statement, any code below that can't be executed
}

const result = addTwoNumbers(5, "4"); // arguments
// console.log("Result:", result);

function loginUserMessage(username = "supersection") {
  // this block will never run because the parameter has a default value
  /* if (username === undefined) {
    console.log("Please enter a username!");
    return;
  }*/

  if (!username) {
    console.log("Please enter a username!");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Soumo"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num){ // rest operator as function parameter
  return num;
}

// console.log(calculateCartPrice(200, 400, 500, 1000))

const product = {
  items: "food", // while passing an object into a function, must check type and the property exists or not
  price: 299,
}

function handleObject(anyObject) {
  console.log(`Item is a ${anyObject.item} and price is ${anyObject.price}`);
}

handleObject(product)
handleObject({
  item: "phone",
  price: 8999
})

const myNewArray = [200, 500, 800, 7000]

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([8, 7, 12, 10, 17, 29]));
