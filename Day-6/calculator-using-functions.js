const num1 = Number(prompt("Enter the first operand:"));
const num2 = Number(prompt("Enter the second operand:"));

// Defining function using ES5:

// function findSum(num1, num2) {
//   return num1 + num2;
// }
// function findDifference(num1, num2) {
//   return num1 - num2;
// }
// function findProduct(num1, num2) {
//   return num1 * num2;
// }
// function findDivision(num1, num2) {
//   return num1 / num2;
// }
// function findRemainder(num1, num2) {
//   return num1 % num2;
// }
// function toCompare(num1, num2) {
//   if (num1 > num2) {
//     console.log(num1 + " is greater than " + num2);
//   } else if (num2 > num1) {
//     console.log(num2 + " is greater than " + num1);
//   } else {
//     console.log(num2 + " is equal to " + num1);
//   }
// }

// Defining Functions using ES6(Arrow Functions):

const findSum = (num1, num2) => {
  return num1 + num2;
};
const findDifference = (num1, num2) => {
  return num1 - num2;
};
const findProduct = (num1, num2) => {
  return num1 * num2;
};
const findDivision = (num1, num2) => {
  return num1 / num2;
};
const findRemainder = (num1, num2) => {
  return num1 % num2;
};
const toCompare = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " is greater than " + num1);
  } else {
    console.log(num2 + " is equal to " + num1);
  }
};

//Handling EdgeCases:

if (isNaN(num1) === true || isNaN(num2) === true) {
  alert("Invalid Inputs,Please use numbers!");
} else {
  const option = Number(
    prompt(
      "Enter what u wanna perform:\n1 -> Addition\n2 -> Subtraction\n3 -> Multiplication\n4 -> Division\n5 -> Remainder\n6 -> To Compare"
    )
  );
  switch (option) {
    case 1:
      console.log(num1 + " + " + num2 + " = " + findSum(num1, num2));
      break;
    case 2:
      console.log(num1 + " - " + num2 + " = " + findDifference(num1, num2));
      break;
    case 3:
      console.log(num1 + " * " + num2 + " = " + findProduct(num1, num2));
      break;
    case 4:
      console.log(num1 + " / " + num2 + " = " + findDivision(num1, num2));
      break;
    case 5:
      console.log(num1 + " % " + num2 + " = " + findRemainder(num1, num2));
      break;
    case 6:
      toCompare(num1, num2);
      break;
    default:
      console.log("Please choose any option between 1 and 6!");
  }
}
