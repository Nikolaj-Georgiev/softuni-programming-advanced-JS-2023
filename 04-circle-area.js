function circleArea(arg) {
    if (typeof arg === 'number') {
        let result = Math.PI * (arg ** 2);
        return Number(result.toFixed(2));
    }
    return `We can not calculate the circle area, because we receive a ${typeof arg}.`;
}

console.log(circleArea(5));
console.log(circleArea('name'));
