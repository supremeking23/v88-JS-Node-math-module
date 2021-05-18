// var mathOperations = require("./mathlib")();

// console.log(`Addtion: ${mathOperations.add(3, 3)}`);
// console.log(`Multiplication: ${mathOperations.multiply(3, 3)}`);
// console.log(`Square: ${mathOperations.square(6)}`);
// console.log(`Get random Number from 1 to 100: ${mathOperations.random(1, 100)}`);

var { add, multiply, square, random } = require("./mathlib")();

console.log(`Addtion: ${add(3, 3)}`);
console.log(`Multiplication: ${multiply(3, 3)}`);
console.log(`Square: ${square(6)}`);
console.log(`Get random Number from 1 to 100: ${random(1, 100)}`);
