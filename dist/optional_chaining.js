"use strict";
//----------------------------------------------------------------------------------------------------
//--------------------------------------- A Beautiful Challenge --------------------------------------
;
// --- create a few UserProfile objects with different preference scenarios ---
// User 1: Has full preferences (theme and both notification types)
const userWithFullPreferences = {
    id: 101,
    username: "Alice",
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            sms: false,
        },
    },
};
// User 2: Has partial preferences (only theme set, no notifications object)
const userWithPartialPreferences = {
    id: 102,
    username: "Bob",
    preferences: {
        theme: "light",
        // No 'notifications' object here
    },
};
// User 3: Has preferences object, but no theme and only partial notifications
const userWithSomePreferencesButNoTheme = {
    id: 103,
    username: "Charlie",
    preferences: {
        // No 'theme' property here
        notifications: {
            email: true,
            // No 'sms' property here
        },
    },
};
// User 4: Has NO preferences object at all
const userWithoutPreferencesObject = {
    id: 104,
    username: "David",
    // No 'preferences' property here
};
// User 5: Has preferences object, but theme is explicitly undefined
const userWithUndefinedTheme = {
    id: 105,
    username: "Eve",
    preferences: {
        theme: undefined, // Theme is explicitly undefined
        notifications: { email: true }
    }
};
// * providing a default if not set.
function getUserTheme(user) {
    // Optional Chaining (?.):
    // This is like detective checking for theme inside preference.
    // user.preferences?.theme means:
    // "Look inside 'user'. IF 'preferences' exists, THEN look for 'theme' inside it.
    // If 'preferences' doesn't exist, or 'theme' doesn't exist, just stop and say 'undefined'."
    var _a, _b;
    // Nullish Coalescing (??):
    // This is like our backup plan provider.
    // If the detective (user.preferences?.theme) comes back with 'undefined' or 'null' (I found nothing),
    // THEN the '?? "light"' part kicks in and says, "No problem! Here's the default 'light' theme!"
    return (_b = (_a = user.preferences) === null || _a === void 0 ? void 0 : _a.theme) !== null && _b !== void 0 ? _b : "light";
}
// --- Test getUserTheme function with all our user profiles ---
console.log("--------- Checking User Themes ---------");
console.log(`${userWithFullPreferences.username}'s theme: ${getUserTheme(userWithFullPreferences)}`); // Output: dark
console.log(`${userWithPartialPreferences.username}'s theme: ${getUserTheme(userWithPartialPreferences)}`); // Output: light
console.log(`${userWithSomePreferencesButNoTheme.username}'s theme: ${getUserTheme(userWithSomePreferencesButNoTheme)}`); // Output: light (because 'theme' property is missing)
console.log(`${userWithoutPreferencesObject.username}'s theme: ${getUserTheme(userWithoutPreferencesObject)}`); // Output: light (because 'preferences' object is missing)
console.log(`${userWithUndefinedTheme.username}'s theme: ${getUserTheme(userWithUndefinedTheme)}`); // Output: light (because 'theme' is explicitly undefined)
