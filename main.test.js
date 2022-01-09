const HundredDoors = require("./main");

const hundredDoors = new HundredDoors();
hundredDoors.flipDoors();

test("first 6 doors", () => {
    expect(hundredDoors.stringOfDoors(8)).toEqual("@##@####");
})

test("All open doors", () => {
    expect(hundredDoors.openDoors).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
})