"use strict";
// Exercise 8: Optional Chaining
// Create an interface for a "House" object with a nested "address" object that includes an optional "city" (string).
// Use optional chaining to safely access the "city" and log it to the console.
var _a;
const myHouse = {
    address: {
        city: "New York",
    },
};
console.log(myHouse.address.city);
// Expected Output: "New York"
const noCityHouse = {
    address: {},
};
console.log((_a = noCityHouse.address.city) !== null && _a !== void 0 ? _a : "City not available");
// Expected Output: "City not available"
