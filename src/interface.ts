// ------------------------------------ Interface Type in Typescript Exercise --------------------------
let count = 10; // TypeScript infers 10 as number because it's initialized with a numeric literal.
    // count = "Yasir"; //Error: Type 'string' is not assignable to type 'number'.
let message = "Hello, TypeScript!"; // TypeScript infers "Hello, TypeScript!" as string because it's initialized within double qout.
    // message = 10; // Error: Type 'number' is not assignable to type 'string'
let isActive = true; // TypeScript infers true as boolean because it's true literal.
    // isActive = "true"; // Error: Type 'string' is not assignable to type 'boolean'
let scores = [85, 92, 78, 90]; // TypeScript infers [85, 92, ..] as number array because it's initialized with numbers inside [].
    // scores = ["85", 92, 78, true]; // Error: Type 'string' and 'boolean' is not assignable to type 'array number'
let userProfile = { id: 1, username: "coder123" }; // TypeScript infers this as object because it's initialized within {}.
    // Objects can hold different types