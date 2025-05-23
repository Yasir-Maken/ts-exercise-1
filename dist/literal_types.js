"use strict";
//----------------------------------------------------------------------------------------------------
// Advance Types in TypeScript "Literal": Definning and declaring
//  * Logs a message to the console, prefixed with the specified log level.
function logData(message, level) {
    console.log(`[${level.toUpperCase()}]: ${message}`);
}
// * Handles a status code and returns a descriptive string.
function handleStatus(status) {
    switch (status) {
        case 200:
            return "OK";
        case 400:
            return "Bad Request";
        case 404:
            return "Not Found";
        case 500:
            return "Internal Server Error";
        default:
            // This should be unreachable due to the strict 'StatusCode' type.
            return "Unknown Status";
    }
}
;
// --- test our functions with valid literal type values ---
console.log("------ Testing logData ------");
logData("Application started", "info"); //Output: [INFO]: Application started
logData("Potential issue detected", "warn"); //Output: [WARN]: Potential issue detected
logData("Detailed debugging info", "debug"); //Output: [DEBUG]: Detailed debugging info
logData("Something went wrong!", "error"); //Output: [ERROR]: Something went wrong!
console.log("\n------ Testing handleStatus ------");
console.log(`Status 200: ${handleStatus(200)}`); //Output: Status 200: OK
console.log(`Status 400: ${handleStatus(400)}`); //Output: Status 400: Bad Request
console.log(`Status 404: ${handleStatus(404)}`); //Output: Status 404: Not Found
console.log(`Status 500: ${handleStatus(500)}`); //Output: Status 500: Internal Server Error
// logData("This will cause an error", "oops"); 
// Error: Argument of type '"oops"' is not assignable to parameter of type 'LogLevel'
