function spiralMatrix(row, col) {
    const matrix = new Array(row)
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(col).fill(null);
    }
    let rowStart = 0;
    let rowEnd = col - 1;
    let colStart = 0;
    let colEnd = row - 1;
    let counter = 1;

    while (matrix.some(x => x.includes(null))) {
        // loop for the top row
        for (let i = rowStart; i < rowEnd; i++) {
            matrix[rowStart][i] = counter;
            counter++;
        }
        // loop for the right column
        for (let i = colStart; i < colEnd; i++) {
            matrix[i][colEnd] = counter;
            counter++;
        }
        // loop for the bottom row
        for (let i = rowEnd; i > rowStart; i--) {
            matrix[rowEnd][i] = counter;
            counter++;
        }
        // loop for the left column
        for (let i = colEnd; i > colStart; i--) {
            matrix[i][colStart] = counter;
            counter++;
        }
        // assign the last element
        if (rowStart === rowEnd && colStart === colEnd) {
            matrix[rowStart][colStart] = counter;
        }
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }

    matrix.map(row => console.log(row.join(' ')));
}

spiralMatrix(5, 5);
spiralMatrix(3, 3);