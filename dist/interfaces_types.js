"use strict";
//----------------------------------------------------------------------------------------------------
// Aliases & Interfaces Type Annotations: Definning and declaring
console.log(`------------------ Interfaces & Aliases --------------------`);
// Create an object instance using ProductType
const productByType = {
    id: 1,
    name: "Awesome Widget",
    price: 19.99,
    description: "A widget that does awesome things!",
};
// Create an object instance using IProduct
const productByInterface = {
    id: 2,
    name: "Super Gadget",
    price: 29.95,
};
// Log both objects to the console
console.log("Product created using ProductType:", productByType);
console.log(`----------------------------------------------------`);
console.log("Product created using IProduct:", productByInterface);
