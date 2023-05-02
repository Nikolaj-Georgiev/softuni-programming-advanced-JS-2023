function spiralMatrix(row, col) {
    const matrix = new Array(row).fill().map(() => new Array(col).fill(null));
    let remaining = row * col;
    let rowStart = 0;
    let rowEnd = col - 1;
    let colStart = 0;
    let colEnd = row - 1;
    let counter = 1;

    while (remaining > 0) {
        // loop for the top row
        for (let i = rowStart; i <= rowEnd && remaining > 0; i++) {
            matrix[rowStart][i] = counter;
            counter++;
            remaining--;
        }
        // loop for the right column
        for (let i = colStart + 1; i <= colEnd && remaining > 0; i++) {
            matrix[i][colEnd] = counter;
            counter++;
            remaining--;
        }
        // loop for the bottom row
        for (let i = rowEnd - 1; i >= rowStart && remaining > 0; i--) {
            matrix[rowEnd][i] = counter;
            counter++;
            remaining--;
        }
        // loop for the left column
        for (let i = colEnd - 1; i >= colStart + 1 && remaining > 0; i--) {
            matrix[i][colStart] = counter;
            counter++;
            remaining--;
        }
        rowStart++;
        rowEnd--;
        colStart++;
        colEnd--;
    }

    matrix.forEach(row => console.log(row.join(' ')));
}


spiralMatrix(5, 5);
spiralMatrix(3, 3);