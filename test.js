const add = require('./packages/add');
const subtract = require('./packages/subtract');
const multiply = require('./packages/multiply');
const divide = require('./packages/divide');

console.log('add(2, 3) =', add(2, 3)); // 5
console.log('subtract(5, 2) =', subtract(5, 2)); // 3
console.log('multiply(2, 3) =', multiply(2, 3)); // 6
console.log('divide(6, 2) =', divide(6, 2)); // 3

try {
  divide(1, 0);
} catch (e) {
  console.log('divide(1, 0) throws:', e.message); // Division by zero
} 

// This test file is just to see the writen package direct imporing original written one 