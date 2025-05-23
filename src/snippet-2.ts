/**
// Snippet 2
let user = {
  name: "Alice",
  age: 30
};

user.email = "alice@example.com";
user.age = "thirty";
 */
/**
 * Original JavaScript Code Issues:
 * 1. Dynamic Property Assignment: JavaScript allows adding properties to objects
 * after their initial creation without any type checking. This can lead to
 * unexpected properties and potential runtime errors if later code assumes
 * their existence.
 * 2. Incorrect Type Assignment: JavaScript doesn't enforce the types of object
 * properties. Assigning a string "thirty" to the `age` property, which was
 * initially a number, will not raise any errors in JavaScript, potentially
 * causing issues in calculations or comparisons.
 */

// -----------------------------------------------------------------------------------------------
// ------------------------------------ Convert to Typescsript Code ------------------------------

// Snippet 2
console.log(`----------------- Snipper 2 -----------------`)

interface userEmail {
  email: string
}


// Extend the interface to include name and age
interface user extends userEmail {
    name: string,
    age: number
};

let firstUser: user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}

console.log(`User Name: ${firstUser.name}`); // Output: User Name: Alice
console.log(`Age: ${firstUser.age}`); // Output: Age: 30
console.log(`Email: ${firstUser.email}`); // Output: Email: alice@example.com

/**
 * TypeScript Solution using Interface:
 * 1. Defining Interfaces: I define an interface `userEmail` to specify the
 * structure and types of an object that has an `email` property of type string.
 * 2. Extending Interfaces: I then define another interface `user` that extends
 * `userEmail` and includes the `name` property of type string and the `age`
 * property of type number. This clearly defines the expected shape of a `user` object.
 * 3. Type Checking: When we declare `firstUser` with the type `user`, TypeScript
 * ensures that the object conforms to this structure. Attempting to add a
 * property that is not defined in the interface (like the original
 * `user.email = ...` in JavaScript) would result in a compile-time error.
 * Similarly, assigning a value of the wrong type to a property (like the
 * original `user.age = "thirty"` in JavaScript) would also be caught by the
 * TypeScript compiler.
 */
