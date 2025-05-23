"use strict";
// ------------------------------------ Functions in Typescript Exercise -------------------------
// function that add numbers
console.log(`------------------ Sum Numbers Function --------------------`);
function addNumber(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
;
console.log(addNumber(10, 20));
// ------------------------------------------------------------------------------------------------
// function that concatinat two strings
console.log(`------------------ Concatinate Strings Function --------------------`);
function concatStrings(firstName, familyName) {
    return `${firstName} ${familyName}`;
}
;
console.log(concatStrings("Yasir", "Maken"));
// ------------------------------------------------------------------------------------------------
// function that calculate array avrage
console.log(`------------------ Array Avrage Function --------------------`);
function calculateAverage(numbers) {
    // Check if the array is empty.
    if (numbers.length === 0) {
        // If the array has no numbers, the average is 0.
        return 0;
    }
    // Initialize a variable to store the sum of the numbers.
    let sum = 0;
    // Loop through each number in the array.
    for (let i = 0; i < numbers.length; i++) {
        // Add the current number to the total sum.
        sum += numbers[i];
    }
    // Calculate the average by dividing the total sum by the number of elements.
    const average = sum / numbers.length;
    // Return the calculated average.
    return average;
}
;
// Example 1: An array with numbers
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
const average1 = calculateAverage(numbers1);
console.log(`The average of [${numbers1}] is: ${average1}`); // Output: The average of [1,2,3,4,5] is: 3
// Example 2: Another array with different numbers
const numbers2 = [10, 20, 30];
const average2 = calculateAverage(numbers2);
console.log(`The average of [${numbers2}] is: ${average2}`); // Output: The average of [10,20,30] is: 20
// Example 3: An empty array
const emptyArray = [];
const averageOfEmpty = calculateAverage(emptyArray);
console.log(`The average of an empty array [] is: ${averageOfEmpty}`); // Output: The average of an empty array [] is: 0
// ------------------------------------------------------------------------------------------------------
// Void return type
console.log(`------------------ Void Log Message Function --------------------`);
function logMessage(message) {
    console.log(message);
}
// Example 1: Logging a simple greeting
logMessage("Hello, world!"); // This will print "Hello, world!" to the console.
// Example 2: Logging a more informative message
let userName = "Alice";
logMessage(`User logged in: ${userName}`); // This will print "User logged in: Alice" to the console.
// ---------------------------------------------------------------------------------------------
// greeting function wiht optional parameter
console.log(`------------------ Greeting Function --------------------`);
function buildName(name, title) {
    if (title) {
        return `Hello, ${title} ${name}`;
    }
    else {
        return `Hello, ${name}`;
    }
}
;
// Examplex
console.log(buildName("Mr.", "Doe")); //Output: "Hello, Mr. Doe"
console.log(buildName("Doe")); //Output: "Hello, John"
// ---------------------------------------------------------------------------------------------
// function to calculate product total with optional discound parameter
console.log(`------------------ Calculat Total Function --------------------`);
function calculateOrderTotal(price, quantity = 1, discountCode) {
    if (discountCode === "SAVE10") {
        return price * quantity * 0.1;
    }
    else {
        return price * quantity;
    }
}
;
// Examplex
console.log(`Total = ${calculateOrderTotal(100, 7, "SAVE10")}`); //Output: Total = 70
console.log(`Total = ${calculateOrderTotal(978, 3)}`); //Output: Total = 2934
//-----------------------------------------------------------------------------------------
//  * Calculates the sum of all numbers passed as arguments using rest parameters.
console.log(`------------------ Sum Rest Function --------------------`);
function sumAllNumbers(...numbers) {
    // Initialize a variable to store the sum, starting at zero.
    let totalSum = 0;
    // Loop through each number in the 'numbers' array
    for (const number of numbers) {
        // Add the current 'number' to the 'totalSum'.
        totalSum += number;
    }
    // After adding all the numbers, return the final 'totalSum'.
    return totalSum;
}
// Example 1: Passing a few numbers
const sum1 = sumAllNumbers(1, 2, 3);
console.log(`The sum is: ${sum1}`); // Output: 6
// Example 2: Passing more numbers
const sum2 = sumAllNumbers(10, 20, 30, 40, 50);
console.log(`The sum is: ${sum2}`); // Output: 150
// Example 3: Passing no numbers
const sum3 = sumAllNumbers();
console.log(`The sum of no numbers is: ${sum3}`); // Output: 0
// Example 4: Passing numbers from an array
const numbersArray = [100, 200, 300];
const sum4 = sumAllNumbers(...numbersArray);
console.log(`The sum of array is: ${sum4}`); // Output: 600
