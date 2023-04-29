function biggestElement(matrix) {

    let biggestElement;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (biggestElement) {
                if (biggestElement < matrix[i][j]) {
                    biggestElement = matrix[i][j];
                }
            } else {
                biggestElement = matrix[i][j];
            }
        }
    }

    return biggestElement;
}
const test1 = biggestElement([
    [],
    []
]);
const test2 = biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);

console.log(test1);
console.log(test2);

function biggestElement1(matrix) {

    let biggestElement;

    matrix.forEach(arr => {
        let biggest = Math.max(...arr);
        if (biggestElement) {
            if (biggest > biggestElement) {
                biggestElement = biggest;
            }
        } else {
            biggestElement = biggest;
        }
    });

    return biggestElement;
}

const test3 = biggestElement1([
    [],
    []
]);
const test4 = biggestElement1([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);

console.log(test3);
console.log(test4);