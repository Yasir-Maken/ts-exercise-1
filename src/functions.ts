// ------------------------------------ Functions in Typescript Exercise -------------------------
// function that add numbers
console.log(`------------------ Sum Numbers Function --------------------`)
function addNumber(num1: number, num2: number): number {
    let sum = num1 + num2;
    return sum;
};
console.log(addNumber(10, 20));

// ------------------------------------------------------------------------------------------------
// function that concatinat two strings
console.log(`------------------ Concatinate Strings Function --------------------`)

function concatStrings(firstName: string, familyName: string): string {
    return `${firstName} ${familyName}`;
};
console.log(concatStrings("Yasir", "Maken"));

// ------------------------------------------------------------------------------------------------
// function that calculate array avrage
console.log(`------------------ Array Avrage Function --------------------`)

function calculateAverage(numbers: number[]): number {
    // Check if the array is empty.
  if (numbers.length === 0) {
    // If the array has no numbers, the average is 0.
    return 0;
  }

   // Initialize a variable to store the sum of the numbers.
  let sum: number = 0;

  // Loop through each number in the array.
  for (let i = 0; i < numbers.length; i++) {
    // Add the current number to the total sum.
    sum += numbers[i];
  }

  // Calculate the average by dividing the total sum by the number of elements.
  const average: number = sum / numbers.length;

  // Return the calculated average.
  return average;
};

// Example 1: An array with numbers
const numbers1: number[] = [1, 2, 3, 4, 5];
console.log(numbers1)
const average1: number = calculateAverage(numbers1);
console.log(`The average of [${numbers1}] is: ${average1}`); // Output: The average of [1,2,3,4,5] is: 3

// Example 2: Another array with different numbers
const numbers2: number[] = [10, 20, 30];
const average2: number = calculateAverage(numbers2);
console.log(`The average of [${numbers2}] is: ${average2}`); // Output: The average of [10,20,30] is: 20

// Example 3: An empty array
const emptyArray: number[] = [];
const averageOfEmpty: number = calculateAverage(emptyArray);
console.log(`The average of an empty array [] is: ${averageOfEmpty}`); // Output: The average of an empty array [] is: 0


// ------------------------------------------------------------------------------------------------------
// Void return type
console.log(`------------------ Void Log Message Function --------------------`)

function logMessage(message: string): void {
  console.log(message);
}

// Example 1: Logging a simple greeting
logMessage("Hello, world!"); // This will print "Hello, world!" to the console.

// Example 2: Logging a more informative message
let userName: string = "Alice";
logMessage(`User logged in: ${userName}`); // This will print "User logged in: Alice" to the console.


// ---------------------------------------------------------------------------------------------
// greeting function wiht optional parameter
console.log(`------------------ Greeting Function --------------------`)


function buildName(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  } else {
    return `Hello, ${name}`;
  }
};

// Examplex
console.log(buildName("Mr.", "Doe"));  //Output: "Hello, Mr. Doe"
console.log(buildName("Doe"));         //Output: "Hello, John"

// ---------------------------------------------------------------------------------------------
// function to calculate product total with optional discound parameter
console.log(`------------------ Calculat Total Function --------------------`)
function calculateOrderTotal(price: number, quantity: number = 1, discountCode?: string ): number {
    if (discountCode === "SAVE10") {
        return price * quantity * 0.1;
    } else {
        return price * quantity;
    }
};

// Examplex
console.log(`Total = ${calculateOrderTotal(100, 7, "SAVE10")}`);  //Output: Total = 70
console.log(`Total = ${calculateOrderTotal(978, 3)}`);         //Output: Total = 2934


//-----------------------------------------------------------------------------------------
//  * Calculates the sum of all numbers passed as arguments using rest parameters.
console.log(`------------------ Sum Rest Function --------------------`)

function sumAllNumbers(...numbers: number[]): number {
  // Initialize a variable to store the sum, starting at zero.
  let totalSum: number = 0;

  // Loop through each number in the 'numbers' array
  for (const number of numbers) {
    // Add the current 'number' to the 'totalSum'.
    totalSum += number;
  }

  // After adding all the numbers, return the final 'totalSum'.
  return totalSum;
}

// Example 1: Passing a few numbers
const sum1: number = sumAllNumbers(1, 2, 3);
console.log(`The sum is: ${sum1}`); // Output: 6

// Example 2: Passing more numbers
const sum2: number = sumAllNumbers(10, 20, 30, 40, 50);
console.log(`The sum is: ${sum2}`); // Output: 150

// Example 3: Passing no numbers
const sum3: number = sumAllNumbers();
console.log(`The sum of no numbers is: ${sum3}`); // Output: 0

// Example 4: Passing numbers from an array
const numbersArray: number[] = [100, 200, 300];
const sum4: number = sumAllNumbers(...numbersArray);
console.log(`The sum of array is: ${sum4}`); // Output: 600