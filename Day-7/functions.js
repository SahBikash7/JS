// WAP a function to add two numbers:

// function sum(a, b) {
//   return a + b;
// }

// // Arrow Function:

// const sum = (a, b) => {
//     return a+b;
// };

// Nameless Function/ Anonymous Function:

// Function keyword must be used to make it global
// Used to run the function which we want to run automatically at the time site loads.
// const a = function () {
//   console.log("Hello From The Nameless Function!!!");
// };
// a(); //To call the nameless function

// // Default Function:

// // If nothing is sent a will be 3 but if we send the value of a then the value of a will be overwritten by the value of a which we send..
// // Used In Pagination
// const mul = (a = 3, b, c = 2) => {
//   console.log(a * b * c);
// };
// mul(undefined, 10, undefined);

// WAP to print 1-5 by using both page and size variable inside the loop:

// const pagination = (page = 1, size=5) => {
//     for (let i = page; i <= size; i++) {
//       console.log(i);
//     }
// };
// pagination(undefined, undefined);

// Inline Function:
// If we assign variable to nameless function/anonymous function, it is called inline function:
// Its use is reuseability

// const footer=function(){
//     console.log("Anonymous!!!");
// }
// footer();
// footer();

// // Closure Function:Most Important
// // Write a function that returns a secret password used in the system:
// const secret = () => {
//   const password = "password";
//   return password;
// };
// console.log(secret());
// // We cannot overwrite the password variable if its inside the function ans as a result it is safe to declare useful or secret things inside the function.

// Implicit Function:
// const add=(a,b)=> a+b;                   //Function ma return keyword use nagari return garne function is Implicit Function.

// Explicit Function:
// const add=(a,b)=>{
//     return a+b;                           //Function ma return keyboard use garera return garne function is Explicit Function.
// }

// IIFE Function:
// Immediately Invoked Functional Expression:
// Use: Scripts to add the dummy data inside the application during first run.

// (function () {
//   console.log("I am IIFE!!!");
// })();

//Arrow IIFE Function:
(a = () => {
  console.log("I am IIFE!!!");
})();
