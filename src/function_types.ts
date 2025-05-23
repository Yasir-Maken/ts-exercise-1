// Arithmetic Operation
// Define a function type
type ArithmeticOperation = (num1: number, num2: number) => number;

// Use the function type for a variable
let add: ArithmeticOperation = (a, b) => a + b;
let subtract: ArithmeticOperation = (a, b) => a - b;
let multiply: ArithmeticOperation = (a, b) => a * b;
let divide: ArithmeticOperation = (a, b) => {
    if (b === 0) {
        return Infinity;
    } else {
        return a / b;
    }
};


function executeOperation(a: number, b: number, operation: ArithmeticOperation): number {
  // "Calculator, use this 'operation' function on 'a' and 'b'!"
  return operation(a, b);
}

// Examples!
const num1 = 10;
const num2 = 5;

console.log(`Adding ${num1} and ${num2}:`, executeOperation(num1, num2, add));       // Output: 15
console.log(`Subtracting ${num2} from ${num1}:`, executeOperation(num1, num2, subtract)); // Output: 5
console.log(`Multiplying ${num1} by ${num2}:`, executeOperation(num1, num2, multiply));  // Output: 50
console.log(`Dividing ${num1} by ${num2}:`, executeOperation(num1, num2, divide));    // Output: 2
console.log(`Dividing ${num2} by zero:`, executeOperation(num2, 0, divide));