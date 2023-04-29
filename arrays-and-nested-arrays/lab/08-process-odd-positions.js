function processOddPositions(input) {

    return input
        .filter((_, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

}

const test1 = processOddPositions([10, 15, 20, 25]);
const test2 = processOddPositions([3, 0, 10, 4, 7, 3]);

console.log(test1);
console.log(test2);