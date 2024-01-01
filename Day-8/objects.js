const person = {
  firstName: "Bikash",
  lastName: "Shah",
  age: 25,
  PhoneNo: 9814866766,
  isAdult: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  //This function defined by using the function keyword returns true since function is global scoped so it can access the above person object if we use this
  //   isEligibleToVote: function () {
  //     return this.age > 18;
  //   },

  // This arrow function returns false,Why?? ==> Since arrow function is a local scoped function so it doesn't know what the hell is "this" as a result we can use the object name to access its key values...
  //   isEligibleToVote: () => {
  //     console.log(this.age);
  //     return this.age > 18;
  //   },

  //   If we use person it returns true now:
  isEligibleToVote: () => {
    console.log(person.age);
    return person.age > 18;
  },
};
// console.log(person.fullName());
console.log(person.isEligibleToVote());

// Also the function inside the object is called method..
// we can also access the key's value as:
console.log(person["firstName"]);
