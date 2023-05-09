function rectangle(width, height, color) {
    class Rectangular {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            this.color = color[0].toUpperCase() + color.slice(1);
        }
        calcArea() {
            return Number(this.width) * Number(this.height);
        }
    }
    return new Rectangular(width, height, color);
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
