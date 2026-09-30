// Homework 5, Exercise 1: Validate Input
const input = prompt("Enter a number between 0 and 100:");
const number = Number(input);

// Number() converts blank input and spaces to 0, so check them separately
const isBlank = input === null || input.trim() === "";

if (!isBlank && !isNaN(number) && number >= 0 && number <= 100) {
  console.log(`Thank you! You entered ${input}, a valid number.`);
} else {
  console.log(`Sorry, ${input} is not a valid entry.`);
}
