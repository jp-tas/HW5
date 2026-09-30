// Homework 5, Exercise 3: Function - Array and Object
function getArrayInfo(array) {
  return {
    firstElement: array[0],
    lastElement: array[array.length - 1],
    length: array.length
  };
}

// Test with the examples from the assignment
const example1 = [4, 8, 12, 5, 20];
const example2 = [
  "a", 2, "Hello", 6, [4, 5], "bye", { name: "Alice", score: 98 }
];

console.log(getArrayInfo(example1));
console.log(getArrayInfo(example2));
