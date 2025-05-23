"use strict";
//----------------------------------------------------------------------------------------------------
// Advance Types in TypeScript "intersectin": Definning and declaring
;
// * logs a formatted message from a UserLog object.
function createUserActivityLog(logEntry) {
    console.log(`Log ${logEntry.id} for user ${logEntry.userId}: ${logEntry.action} at ${logEntry.createdAt.toLocaleString()}`);
}
;
// --- create a UserLog object and test logging function ---
console.log("------- Creating and Logging User Activity -------");
const newUserActivity = {
    id: "event-123",
    userId: "yasir-456",
    action: "User logged in",
    createdAt: new Date(),
    updatedAt: new Date(), // Assuming it was just created, so these are the same initially
};
createUserActivityLog(newUserActivity);
//Output: Log event-123 for user yasir-456: User logged in at exact time
const anotherActivity = {
    id: "event-789",
    userId: "ahmed-012",
    action: "Profile updated",
    createdAt: new Date("2025-05-23T10:00:00Z"),
    updatedAt: new Date("2025-05-23T10:15:00Z"),
};
createUserActivityLog(anotherActivity);
//Output: Log event-789 for user user-012: Profile updated at 5/23/2025, 1:00:00 PM
