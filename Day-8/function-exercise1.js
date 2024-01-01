// Write a function that reverses a number:

// This is how i did:
// const num = Number(prompt("Enter Any Number:"));
// const reverse = (num) => {
//   let revnum = 0,
//     rem;
//   for (let i = String(num).length; i >= 1; i--) {
//     rem = num % 10;
//     revnum = revnum * 10 + rem;
//     num = parseInt(num / 10);
//   }
//   return revnum;
// };
// console.log(reverse(num));

// Sir Ko Method:
const num = prompt("Enter Any Number:");
const reverse = (num) => {
  let revnum = "";
  for (let i = num.length - 1; i >= 0; i--) {
    revnum += num[i];
  }
  return revnum;
};
console.log(`The reverse of ${num} is ${reverse(num)}.`);
