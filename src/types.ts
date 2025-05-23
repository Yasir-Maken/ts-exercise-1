// ------------------------------------ Basic Types in Typescript Exercise --------------------------
// Declaring restrict variable with types (stringn, number, boolean, string array, tuple)
let age: number = 28, 
    theName: string = "Yasir",
    currentlyLearning: boolean = false,
    programmingLanguage: string[] = ["JavaScript", "Python"],
    product: [string, number] = ["e-Commerce", 1000];

// Declaring enum type to restircited strings
enum userRole {
    Admin,
    Editor,
    Viewr
}