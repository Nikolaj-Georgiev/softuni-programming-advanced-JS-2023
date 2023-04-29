function countEqualNeighbors(matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let first = matrix[i][j];
            let second = matrix[i][j + 1]
            if (first === second) {
                count++;
            }
            if (i === matrix.length - 1) {
                continue;
            }
            second = matrix[i + 1][j];
            if (first === second) {
                count++;
            }
        }
    }

    return count;
}
const matrix1 = [
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
];

const matrix2 = [
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
];

const matrix3 = [
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
];

console.log(countEqualNeighbors(matrix1)); // Output: 1
console.log(countEqualNeighbors(matrix2)); // Output: 2
console.log(countEqualNeighbors(matrix3)); // Output: 5