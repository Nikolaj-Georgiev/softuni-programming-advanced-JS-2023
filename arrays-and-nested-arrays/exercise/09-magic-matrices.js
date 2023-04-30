function magicMatrices(matrix) {

    let isMagic = true;

    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
        return false;
    }

    let sum = matrix[0].reduce((a, v) => a + v);

    for (let i = 0; i < matrix.length; i++) {
        let localRowSum = 0;
        let localColSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            localRowSum += matrix[i][j];
            localColSum += matrix[j][i];
        }

        if (sum !== localRowSum || sum !== localColSum) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1]
]));
console.log(magicMatrices([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
]));