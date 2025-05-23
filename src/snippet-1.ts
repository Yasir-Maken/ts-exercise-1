// Snippet 1
/**
function calculateTotal(price, quantity) {
  return price * quantity;
}
calculateTotal("10", 5); 
calculateTotal(true, "3");
 */
/**
 * Original JavaScript Code Issues:
 * 1. Implicit Type Conversion: JavaScript performs implicit type conversion,
 * which can lead to unexpected results. This lack of
 * strict typing can hide potential errors.
 */
// -----------------------------------------------------------------------------------------------
// ------------------------------------ Convert to Typescsript Code ------------------------------

// Snippet 1
console.log(`----------------- Snipper 1 -----------------`)

function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
};
console.log(`Total = ${calculateTotal(10, 5)}`); // Output: Total = 50
/**
 * TypeScript Solution:
 * 1. Explicit Type Annotations: By adding type annotations (`: number`), I
 * enforce that the `price` and `quantity` parameters must be numbers. This
 * prevents the type-related issues seen in the JavaScript version.
 */