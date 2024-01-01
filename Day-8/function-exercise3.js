// Write a function which returns both product and quotient as mentioned by the user but by default it returns product:

const calcMulandDiv = (num1, num2, operation = "mul") => {
  if (operation === "mul") {
    return num1 * num2;
  }
  return num1 / num2;
};
console.log(calcMulandDiv(4, 2, "div"));
