//----------------------------------------------------------------------------------------------------
// Aliases & Interfaces Type Annotations: Definning and declaring
console.log(`------------------ Readonly Properties and Index Signatures --------------------`);

// Define an interface named IProduct
interface AppConfig {
    readonly apiKey: string,
    appName: string,
    version?: string,
}

// Create an instance of `AppConfig`. Try to modify the `apiKey` after creation and observe the error.
let app1: AppConfig = {
    apiKey: "Loading Time",
    appName: "Doulingo",
    version: "10.50.13"
};
// app1.apiKey = "Data Usage" // Cannot assign to 'apiKey' because it is a read-only property.
console.log(app1);

//-----------------------------------------------------------------------------------------
// Defines an interface `UserSettings` that allows any number of string properties,
console.log(`-------------------- User Setting Interface --------------------`)

interface UserSettings {
  [key: string]: string;
}

// Example 1: Create instance of theme settings
const themeSettings: UserSettings = {
  theme: 'dark',
  fontSize: '18px',
};

console.log("Theme Settings:", themeSettings); // Output: Theme Settings: { theme: 'dark', fontSize: '18px' }
themeSettings.fontFamily = "Arial";
console.log(`Font Family: ${themeSettings.fontFamily}`);

//----------------------------------------------------------------------------------------------
// Extending interfaces
console.log(`------------------- Extend Interfaces ------------------------`);

// Vehicle interface
interface Vehicle {
  brand: string; 
  startEngine(): void;
}

// Extend the vehicle in cars
interface Car extends Vehicle {
  numberOfDoors: number;
}

// Extend Motorcycle within the Veicle
interface Motorcycle extends Vehicle {
  hasSidecar?: boolean; // Motorcycles *might* have a sidecar (it's optional!).
}

// build a Car based on our Car blueprint!
const myCar: Car = {
  brand: "Honda",
  numberOfDoors: 4,
  startEngine: () => console.log("Car engine started! Vroom vroom!"),
};

// And let's build a Motorcycle based on our Motorcycle blueprint!
const myMotorcycle: Motorcycle = {
  brand: "Harley-Davidson",
  hasSidecar: true,
  startEngine: () => console.log("Motorcycle engine roared to life! Brrrrm!"),
};

console.log(myCar);
console.log(myMotorcycle);