abstract class Shape {
    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract getArea(): number;
}

class Rectangle extends Shape {
    private sideA: number;
    private sideB: number;

    constructor(color: string, sideA: number, sideB: number) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(): number {
        return this.sideA * this.sideB;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());