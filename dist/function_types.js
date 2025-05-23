"use strict";
// Use the function type for a variable
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (b === 0) {
        return Infinity;
    }
    else {
        return a / b;
    }
};
function executeOperation(a, b, operation) {
    // "Calculator, use this 'operation' function on 'a' and 'b'!"
    return operation(a, b);
}
// Examples!
const num1 = 10;
const num2 = 5;
console.log(`Adding ${num1} and ${num2}:`, executeOperation(num1, num2, add)); // Output: 15
console.log(`Subtracting ${num2} from ${num1}:`, executeOperation(num1, num2, subtract)); // Output: 5
console.log(`Multiplying ${num1} by ${num2}:`, executeOperation(num1, num2, multiply)); // Output: 50
console.log(`Dividing ${num1} by ${num2}:`, executeOperation(num1, num2, divide)); // Output: 2
console.log(`Dividing ${num2} by zero:`, executeOperation(num2, 0, divide));
