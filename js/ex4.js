// Homework 5, Exercise 4: Guess a Number
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess;

do {
  guess = Number(prompt("Guess the number between 1 and 100:"));
  attempts++;

  if (guess < randomNumber) {
    console.log("Too low, guess again");
  } else if (guess > randomNumber) {
    console.log("Too high, guess again");
  }
} while (guess !== randomNumber);

console.log(`Correct! It took you ${attempts} attempts to guess the correct number.`);
