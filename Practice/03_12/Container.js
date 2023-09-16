 

class Container {
    constructor(
        name,
        size,
        type,
        color,
        owner,
        width,
        length,
        doorOpen
    ) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.color = color;
        this.owner = owner;
        this.doorOpen = doorOpen;
        this.measurement = {
            measure1: width,
            measure2: length,
        };
    }
    toggleDoor(doorStatus) {
        this.doorOpen = doorStatus;
    };
    newMeasurement(width, length) {
        this.measurement.measure1 = width;
        this.measurement.measure2 = length;
    };
}
export default Container;
