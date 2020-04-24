// 1. Copy and paste your prototype in here and refactor into class syntax.
console.log(`Classes -------------------`);
class NewCuboidMaker {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.height * this.length * this.width;
    }
    surfaceArea() {
        return 2 * (this.height * this.width + this.width * this.length + this.height * this.length);
    }
}

const newCuboid = new NewCuboidMaker(4, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker {
    constructor(length, width, height) {
        super(length, width, height);
    }
    cubeVolume() {
        return Math.pow(this.length, 3);
    }
}

const newCube = new CubeMaker(5, 5, 5);
console.log(newCube.cubeVolume());
console.log(newCube.volume());