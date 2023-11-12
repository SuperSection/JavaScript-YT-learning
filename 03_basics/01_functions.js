function sayMyName() {
  console.log("S");
  console.log("U");
  console.log("P");
  console.log("E");
  console.log("R");
}

sayMyName; // reference of the function
sayMyName(); //execution of the function

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
console.log("Result:", result);

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

console.log(loginUserMessage("Soumo"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
