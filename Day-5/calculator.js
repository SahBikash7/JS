const num1 = Number(prompt("Enter the first operand:"));
const num2 = Number(prompt("Enter the second operand:"));
console.log(isNaN(num1));
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
      console.log(num1 + " + " + num2 + " = " + (num1 + num2));
      break;
    case 2:
      console.log(num1 + " - " + num2 + " = " + (num1 - num2));
      break;
    case 3:
      console.log(num1 + " * " + num2 + " = " + num1 * num2);
      break;
    case 4:
      console.log(num1 + " / " + num2 + " = " + num1 / num2);
      break;
    case 5:
      console.log(num1 + " % " + num2 + " = " + (num1 % num2));
      break;
    case 6:
      if (num1 > num2) {
        console.log(num1 + " is greater than " + num2);
      } else if (num2 > num1) {
        console.log(num2 + " is greater than " + num1);
      } else {
        console.log(num2 + " is equal to " + num1);
      }
      break;
    default:
      console.log("Please choose any option between 1 and 6!");
  }
}

