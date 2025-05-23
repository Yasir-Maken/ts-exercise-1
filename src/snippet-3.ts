// Snippet 3
console.log(`----------------- Snipper 3 -----------------`)

/**
function displayUserInfo(user) { 
  console.log(\`Name: \${user.name}, Age: \${user.age}\`);
  return user.isActive;
}

displayUserInfo({ name: "Bob" });
 */
/**
 * Original JavaScript Code Issues:
 * 1. Implicit `any` Type: The `user` parameter in the `displayUserInfo` function
 * has an implicit `any` type because no type annotation is provided. This
 * disables TypeScript's type checking for this parameter, allowing any
 * object to be passed, potentially leading to runtime errors if the expected
 * properties (`name` and `age`) are missing.
 * 2. Non-Optional Parameter: The code attempts to access `user.age` without
 * ensuring that the `age` property exists on the passed object. In the
 * call `displayUserInfo({ name: "Bob" })`, the `age` property is missing,
 * which could lead to an error (though JavaScript might just output `undefined`).
 * 3. Incorrect String Interpolation: The backticks (`) should be used for
 * template literals to correctly embed expressions using `${...}`. The
 * original code uses a backslash before the backtick, treating it as a
 * literal character.
 * 4. Unclear Return Type and Side Effects: The function modifies the `isActive`
 * property of the input object and returns a string. This behavior might not
 * be immediately obvious.
 */

// -----------------------------------------------------------------------------------------------
// ------------------------------------ Convert to Typescsript Code ------------------------------
function displayUserInfo(user: {name: string, age?: number, isActive?: boolean}) {
    if (user.age) {
      console.log(`Name: ${user.name} Age: ${user.age}`);
    } else {
      console.log(`Name: ${user.name}`);
    }
    return `Active Now: ${user.isActive = true}`;
};

console.log(displayUserInfo({name: "Bob"}));
console.log(displayUserInfo({name: "Bob", age: 30}));
/**
 * TypeScript Solution:
 * 1. Explicit Type for Parameter: I define a specific type for the `user`
 * parameter using an object literal type `{ name: string, age?: number, isActive?: boolean }`.
 * The `?` after `age` and `isActive` indicates that these properties are optional.
 * 2. Optional Properties: By making `age` optional, the function can now be called
 * with an object that only has the `name` property, without causing a type error.
 * 3. Conditional Access for Optional Property: I use an `if (user.age)` check to
 * safely access and display the `age` property only if it exists on the `user` object.
 * 4. Corrected String Interpolation: I use the correct template literal syntax
 * with backticks (`) to embed the values of `user.name` and `user.age`.
 * 5. Clearer Return Type and Avoiding Side Effects (Improved): While the original
 * JavaScript modified the input object, it's generally better practice to avoid
 * such side effects in functions unless explicitly intended and documented. The
 * TypeScript version here returns a boolean indicating the active status without
 * modifying the input object directly. If modifying the object is required, it
 * should be done more explicitly.
 */