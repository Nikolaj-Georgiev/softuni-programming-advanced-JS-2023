function orbit(input) {

    let [cols, rows, x, y] = [...input];
    const matrix = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => null));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x) + 1, Math.abs(j - y) + 1);
        }
    }
    matrix.map(row => console.log(row.join(' ')));
}

orbit([4, 4, 0, 0]);
console.log('+++++++++++++++');
orbit([5, 5, 2, 2]);
console.log('+++++++++++++++');
orbit([3, 3, 2, 2]);