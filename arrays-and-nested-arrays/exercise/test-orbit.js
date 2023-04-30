function orbit(input) {

    // This code defines a function orbit that takes an array input as an argument, 
    // and creates a matrix of size row x col where each element is a number representing its distance to the closest edge of the matrix,
    // based on the given rowIndex and colIndex.

    // Here s what the code does, step by step:

    // It extracts the values of row, col, rowIndex, and colIndex from the input array.

    let row = Number(input[0]);
    let col = Number(input[1]);
    let rowIndex = Number(input[2]);
    let colIndex = Number(input[3]);

    // It initializes an empty matrix array, with row arrays and col elements in each array.

    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push([]);
        }
    }
    console.table(matrix); // this is for better overview of the matrix.

    // It iterates over each element in the matrix, and assigns the maximum value of the absolute difference 
    // between the current element's row and rowIndex, and the absolute difference between the current element's 
    // column and colIndex, plus 1, to that element.

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let rowValue = Math.abs(i - rowIndex) + 1;
            let colValue = Math.abs(j - colIndex) + 1;
            let cellValue = Math.max(rowValue, colValue);
            matrix[i][j] = cellValue;
            console.table(matrix); //this is put for visualization, how the matrix is filled.
        }
    }

    console.table(matrix) // final overview of the matrix.

}

orbit([4, 4, 0, 0]);
console.log('---------------');
orbit([5, 5, 2, 2]);
console.log('---------------');
orbit([3, 3, 2, 2]);