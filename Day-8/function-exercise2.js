// Write a function to convert celsius to fahrenheit and vice versa also take celsius as the default temperatre value unless user gives fahrenheit temperature as input himself.

const tempInCel = Number(prompt("Enter The Temperature:"));
const changeTemp = (temp, measurement = "c") => {
  if (measurement === "c") {
    const tempF = (temp * 9) / 5 + 32;
    console.log(
      `The temp ${temp} in Celsius is equivalent to ${tempF} in Fahrenheit.`
    );
    return;
  }
  const tempC = ((temp - 32) * 5) / 9;
  console.log(
    `The temp ${temp} in Fahrenheit is equivalent to ${tempC} in Celsius.`
  );
};
changeTemp(tempInCel);

// // Sir's Way:
// const tempConverter = (temp, measurement = "c") => {
//     if (measurement === "c") {
//       return (9 * temp) / 5 + 32 + "Fahrenheit";
//     }
//     return ((temp - 32) / 9) * 5 + "Celsius";
//   };
//   console.log(tempConverter(45, "f"));
