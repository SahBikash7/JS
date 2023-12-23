// There are many types of functions:
// 1.Nameless Function
// 2.Default Function
// 3.Parameterized Function
// 4.Inline Function
// 5.Closure Function (Interview Question)
// 6.Implict Function
// 7.Explict Function

//Print The multiplication table of any number using functuions:

const num = prompt("Enter The Number:");
const printTable = (num) => {
  for (i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + num * i);
  }
  return;
};
if (
  (num.charCodeAt() >= 65 && num.charCodeAt() <= 90) ||
  (num.charCodeAt() >= 97 && num.charCodeAt() <= 122)
) {
  alert("Please enter valid Input");
} else {
  printTable(num);
}
