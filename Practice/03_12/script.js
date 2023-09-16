/* Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Container from "./Container.js";

const newContainer = new Container (
    "SUDU1234567",
    20,
    "GP",
    "red",
    "SUDU",
    240,
    600,
    false
);

console.log("The Container ojbect: ", newContainer);
console.log("The Container size/type: ", newContainer.size, "/", newContainer.type);
console.log("The Container Door Status: ", newContainer.doorOpen);

