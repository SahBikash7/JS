let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
if (num1 > num2) {
  alert(num1 + " is greater than " + num2);
} else {
  alert(num2 + " is greater than " + num1);
}
confirm("Are you satisfied with the result??");

// (USE of || && and !) :

if (num1 > 10 || num2 > 10) {
  console.log(num1 + " or " + num2 + " is greater than 10.");
}
if (num1 > 2 && num2 > 2) {
  console.log(num1 + " and " + num2 + " is greater than 2.");
}
if (num1 != 5) {
  console.log(num1 + " is not equal to 5.");
}

// NOTE:
// Every String evaluates to true in boolean datatype and every number except 0 evaluates to true in boolean datatype.

// Learning about statements
// if we have to execute a block of codes based on the condition then we use statements and they are:
// if-else
// switch case

// NOTE:COMPARISON CHART:
// = -> value check garxa;
// == -> value and as well as equality check garxa
// === -> value and equality and as well as datatype check garxa

// Learning about if-else.
const gender = prompt("Please Specif Your Gender:(M/F)");
if (gender === "M") {
  console.log("You r male.");
} else {
  console.log("You are female.");
}

// Learning about switch case.
const num = Number(prompt("Enter Any Number between 1 and 7:"));
switch (num) {
  case 1:
    console.log("Today is Sunday.");
    break;
  case 2:
    console.log("Today is Monday.");
    break;
  case 3:
    console.log("Today is Tuesday.");
    break;
  case 4:
    console.log("Today is Wednesday.");
    break;
  case 5:
    console.log("Today is Thursday.");
    break;
  case 6:
    console.log("Today is Friday.");
    break;
  case 7:
    console.log("Today is Saturday.");
    break;
  default:
    console.log("Please enter any number between 1 and 7.");
    break;
}
