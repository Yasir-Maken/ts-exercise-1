//----------------------------------------------------------------------------------------------------
//--------------------------------------- A Beautiful Challenge --------------------------------------

// * Defines the structure of a user's profile, including optional nested preferences.
interface UserProfile {
  id: number;
  username: string;
  // The 'preferences' object itself is optional.
  preferences?: {
    // The 'theme' property inside 'preferences' is optional.
    theme?: "dark" | "light";
    // The 'notifications' object inside 'preferences' is optional.
    notifications?: {
      // 'email' notification preference is optional.
      email?: boolean;
      // 'sms' notification preference is optional.
      sms?: boolean;
    };
  };
};

// --- create a few UserProfile objects with different preference scenarios ---

// User 1: Has full preferences (theme and both notification types)
const userWithFullPreferences: UserProfile = {
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
const userWithPartialPreferences: UserProfile = {
  id: 102,
  username: "Bob",
  preferences: {
    theme: "light",
    // No 'notifications' object here
  },
};

// User 3: Has preferences object, but no theme and only partial notifications
const userWithSomePreferencesButNoTheme: UserProfile = {
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
const userWithoutPreferencesObject: UserProfile = {
  id: 104,
  username: "David",
  // No 'preferences' property here
};

// User 5: Has preferences object, but theme is explicitly undefined
const userWithUndefinedTheme: UserProfile = {
  id: 105,
  username: "Eve",
  preferences: {
    theme: undefined, // Theme is explicitly undefined
    notifications: { email: true }
  }
};

// * providing a default if not set.
function getUserTheme(user: UserProfile): "dark" | "light" {
  // Optional Chaining (?.):
  // This is like detective checking for theme inside preference.
  // user.preferences?.theme means:
  // "Look inside 'user'. IF 'preferences' exists, THEN look for 'theme' inside it.
  // If 'preferences' doesn't exist, or 'theme' doesn't exist, just stop and say 'undefined'."

  // Nullish Coalescing (??):
  // This is like our backup plan provider.
  // If the detective (user.preferences?.theme) comes back with 'undefined' or 'null' (I found nothing),
  // THEN the '?? "light"' part kicks in and says, "No problem! Here's the default 'light' theme!"
  return user.preferences?.theme ?? "light";
}

// --- Test getUserTheme function with all our user profiles ---
console.log("--------- Checking User Themes ---------");

console.log(
  `${userWithFullPreferences.username}'s theme: ${getUserTheme(
    userWithFullPreferences
  )}`
); // Output: dark

console.log(
  `${userWithPartialPreferences.username}'s theme: ${getUserTheme(
    userWithPartialPreferences
  )}`
); // Output: light

console.log(
  `${userWithSomePreferencesButNoTheme.username}'s theme: ${getUserTheme(
    userWithSomePreferencesButNoTheme
  )}`
); // Output: light (because 'theme' property is missing)

console.log(
  `${userWithoutPreferencesObject.username}'s theme: ${getUserTheme(
    userWithoutPreferencesObject
  )}`
); // Output: light (because 'preferences' object is missing)

console.log(
  `${userWithUndefinedTheme.username}'s theme: ${getUserTheme(
    userWithUndefinedTheme
  )}`
); // Output: light (because 'theme' is explicitly undefined)