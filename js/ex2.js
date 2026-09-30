// Homework 5, Exercise 2: Validate Input with Error Handling
const input = prompt("Enter a number between 0 and 100:");

try {
  const number = Number(input);

  // Number() converts blank input and spaces to 0, so check them separately
  const isBlank = input === null || input.trim() === "";

  if (isBlank || isNaN(number) || number < 0 || number > 100) {
    throw new Error(`Sorry, ${input} is not a valid entry.`);
  }

  console.log(`Thank you! You entered ${input}, a valid number.`);
} catch (error) {
  console.log(error.message);
}
