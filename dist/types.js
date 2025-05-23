"use strict";
// ------------------------------------ Basic Types in Typescript Exercise --------------------------
// Declaring restrict variable with types (stringn, number, boolean, string array, tuple)
let age = 28, theName = "Yasir", currentlyLearning = false, programmingLanguage = ["JavaScript", "Python"], product = ["e-Commerce", 1000];
// Declaring enum type to restircited strings
var userRole;
(function (userRole) {
    userRole[userRole["Admin"] = 0] = "Admin";
    userRole[userRole["Editor"] = 1] = "Editor";
    userRole[userRole["Viewr"] = 2] = "Viewr";
})(userRole || (userRole = {}));
