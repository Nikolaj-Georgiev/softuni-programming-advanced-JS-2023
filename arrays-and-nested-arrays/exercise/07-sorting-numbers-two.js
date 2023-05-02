function sortingNumbers(input) {
    let result = [];
    input.sort((a, b) => b - a);
    while (input.length !== 0) {
        result.push(input.pop());
        result.push(input.shift());
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));