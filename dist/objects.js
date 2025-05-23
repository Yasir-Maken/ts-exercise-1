"use strict";
//----------------------------------------------------------------------------------------------------
// Object Type Annotations: Defining Simple Book Object
console.log(`------------------ Simple Object --------------------`);
let Book = {
    title: "TypeScript",
    auther: "Stashouk",
    pages: 140,
    isPublished: true
};
console.log(Book); // Output: {title: 'TypeScript', auther: 'Stashouk', pages: 140, isPublished: true}
console.log(Book.title); //Output: TypeScript
// console.log(Book.genre); // Error: Property 'genre' does not exist on type
// Book.pages = "500"; // Error: Type 'string' is not assignable to type 'number'
