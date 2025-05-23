// Definning greeting function
function greet(name: string): string {
    return `Hello! ${name}`;
}

// Invoke greeting function with my name
console.log(greet("Yasir"));

// Experment type error
// console.log(greet(123)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
// let myMessage: string = true; // Error Type 'boolean' is not assignable to type 'string'
/* function greet(name: string): number {
    return console.log(`Hello! ${name}`); // Error: Type 'string' is not assignable to type 'number'.
}
*/