/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const container = {
    name: "General Purpose Conainer",
    size: 20,
    type: "GP",
    color: "red",
    logo: "Hamburg Sud",
    measurment: {
        length: 600,
        width: 240,
    },
    doorOpen: false,
    toggleDoor: function (doorStatus) {
        this.doorOpen = doorStatus;
    },
};

console.log("My object I brought here: ", container);
console.log("Object size/type: ", container.size, "/", container.type);
console.log("Object measurement: ", container.measurment.length, "/", container.measurment.width);

