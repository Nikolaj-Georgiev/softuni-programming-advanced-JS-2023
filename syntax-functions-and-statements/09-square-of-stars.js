function squareOfStars(x = 5) {
    let result = '';
    for (let i = 1; i <= x; i++) {
        result += '* '.repeat(x);
        result += '\n';
    }
    return result;
}

squareOfStars(1);
console.log('+++++++++++++++++++');
squareOfStars(2);
console.log('+++++++++++++++++++');
squareOfStars(5);
console.log('+++++++++++++++++++');
squareOfStars(7);
console.log('+++++++++++++++++++');
squareOfStars();