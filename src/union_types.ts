//----------------------------------------------------------------------------------------------------
// Advance Types in TypeScript "Union": Definning and declaring

// accepts a parameter `input` which can be a `string`, a `number`, or a `boolean`.
function processInput(input: number | string | boolean) {
    // Use `typeof` for type narrowing.
    if (typeof input === "string") {
        console.log(input.length);
    } else if (typeof input === "number") {
        if (input > 0) {console.log("Positive Number");}
        else if (input < 0) {console.log("Negative Number");}
        else if (input === 0) {console.log("Zero");}
        else {console.log("UNKNOWN_NUMBER");};
    } else if (input === true || input === false) {
        console.log(`It is ${input}`);
    } else {
        console.log("UNKNOWN_INPUT");
    };
}

processInput("Yasir Maken"); //Output: 11
processInput(-55); //Output: Negative Number
processInput(true);//Output: It is true 

//----------------------------------------------------------------------------------------------------
// function `handleApiResponse` that takes a parameter `response` which can be either `Successfull or not
console.log(`------------ API Response with Union Type ------------`)

//  * Defines a successful API response.
type SuccessResponse = {
  success: true;
  data: unknown;
};

//  * Defines an unsuccessful API response (an error).
type ErrorResponse = {
  success: false;
  error: {
    code: number;
    message: string;
  };
};

// * ApiResponse using type with union! It can be EITHER a SuccessResponse OR an ErrorResponse.
type ApiResponse = SuccessResponse | ErrorResponse;

// * Handles an API response, logging different messages based on whether it was successful or not.
function handleApiResponse(response: ApiResponse): void {
  // "type narrowing", looks at 'response.success' and, if it's 'true', it knows
  // that 'response' MUST be a 'SuccessResponse' from this point on in this 'if' block.
  if (response.success) {
    // So, we can safely access 'response.data'.
    console.log(`Data received: ${response.data}`);
  } else {
    // If 'response.success' was not 'true', then it MUST be 'false' (because of our types 'boolean').
    // So it is an 'ErrorResponse'. We can safely access 'response.error.code' and 'response.error.message'.
    console.log(`Error ${response.error.code}: ${response.error.message}`);
  }
};

// --- test the function with various packages! ---

console.log("--------- Testing handleApiResponse ---------");

// Test Case 1: A successful response with some string data
const successfulResponse1: ApiResponse = {
  success: true,
  data: "User data loaded successfully!",
};
handleApiResponse(successfulResponse1);
//Output: Data received: "User data loaded successfully!"


// Test Case 2: A successful response with an object as data
const successfulResponse2: ApiResponse = {
  success: true,
  data: { userId: 123, username: "Yasir" },
};
handleApiResponse(successfulResponse2);
//Output: Data received: {"userId":123,"username":"dev_gemini"}


// Test Case 3: An error response (e.g., server error)
const errorResponse1: ApiResponse = {
  success: false,
  error: {
    code: 500,
    message: "Internal Server Error",
  },
};
handleApiResponse(errorResponse1);
//Output: Error 500: Internal Server Error

// Test Case 4: Another error response (e.g., not found)
const errorResponse2: ApiResponse = {
  success: false,
  error: {
    code: 404,
    message: "Resource Not Found",
  },
};
handleApiResponse(errorResponse2);
//Output: Error 404: Resource Not Found

// Test Case 5: A successful response with an array of numbers
const successfulResponse3: ApiResponse = {
  success: true,
  data: [1, 2, 3, 4, 5],
};
handleApiResponse(successfulResponse3);
//Output: Data received: [1,2,3,4,5]