function diagonalAttack(stringMatrix) {

    const matrix = stringMatrix.map(row => row.split(' ').map(Number));
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[matrix.length - i - 1][i];
    }

    if (mainDiagonalSum === secondDiagonalSum) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i !== j && i !== (matrix.length - j - 1)) {
                    matrix[i][j] = mainDiagonalSum;
                }
            }
        }
    }

    printOnConsole(matrix);

    function printOnConsole(arr) {
        arr.map(element => {
            console.log(element.join(' '));
        });
    }
}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1'
    ]
);
console.log('++++++++++++');
diagonalAttack(
    ['1 1 1',
        '1 1 1',
        '1 1 0'
    ]
);