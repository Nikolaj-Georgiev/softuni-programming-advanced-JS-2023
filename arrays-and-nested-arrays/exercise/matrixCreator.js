function matrixCreator(rows, cols, initial) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = new Array(cols).fill(initial);
        matrix.push(row);
    }
    return matrix;
}

const matrix = createMatrix(3, 3, null);
console.table(matrix); // [[null, null, null], [null, null, null], [null, null, null]]