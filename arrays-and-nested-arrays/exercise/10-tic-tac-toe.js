function ticTacToe(input) {

    let playingDesk = [];
    for (let i = 0; i < 3; i++) {
        playingDesk[i] = [];
        for (let j = 0; j < 3; j++) {
            playingDesk[i][j] = false;
        }
    }

    let xCounter = 0;
    let oCounter = 0;
    let index = true;
    let flag = false;
    let winner = '';
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let [row, col] = element.split(' ').map(Number);
        if (index) {
            if (i % 2 === 0) {
                if (playingDesk[row][col] === false) {
                    playingDesk[row][col] = 'X';
                    xCounter++;
                } else {
                    console.log('This place is already taken. Please choose another!');
                    if (index) {
                        index = false;
                    } else {
                        index = true;
                    }
                }
            } else {
                if (playingDesk[row][col] === false) {
                    playingDesk[row][col] = 'O';
                    oCounter++;
                } else {
                    console.log('This place is already taken. Please choose another!');
                    if (index) {
                        index = false;
                    } else {
                        index = true;
                    }
                }
            }
        } else {
            if (i % 2 === 1) {
                if (playingDesk[row][col] === false) {
                    playingDesk[row][col] = 'X';
                    xCounter++;
                } else {
                    console.log('This place is already taken. Please choose another!');
                    if (index) {
                        index = false;
                    } else {
                        index = true;
                    }
                }
            } else {
                if (playingDesk[row][col] === false) {
                    playingDesk[row][col] = 'O';
                    oCounter++;
                } else {
                    console.log('This place is already taken. Please choose another!');
                    if (index) {
                        index = false;
                    } else {
                        index = true;
                    }
                }
            }
        }

        if (xCounter >= 3 || oCounter >= 3) {
            winner = winnerChecker(winner, playingDesk);
            if (winner) {
                flag = true;
            }
            let counter = 9;
            for (let i = 0; i < playingDesk.length; i++) {
                for (let j = 0; j < playingDesk.length; j++) {
                    const element = playingDesk[i][j];
                    if (element !== false) {
                        counter--;
                    }
                }
            }
            if (counter === 0) {
                flag = true;
            }
        }


        if (flag) {
            break;
        }
    };

    if (winner) {
        console.table(`Player ${winner} wins!`);
        playingDesk.forEach(x => console.log(x.join('\t')));
    } else {
        console.log('The game ended! Nobody wins :(');
        playingDesk.forEach(x => console.log(x.join('\t')));
    }

    function winnerChecker(player, arr) {
        for (let i = 0; i < arr.length; i++) {
            let rowCheck = '';
            let colCheck = '';
            let diagonalCheck = '';
            for (let j = 0; j < arr.length; j++) {
                rowCheck += arr[i][j];
                colCheck += arr[j][i];
                if (i === 0) {
                    diagonalCheck += arr[i + j][j];
                } else if (i === 1) {
                    continue;
                } else if (i === 2) {
                    diagonalCheck += arr[i - j][j];
                }
            }

            if (rowCheck === 'XXX' || colCheck === 'XXX' || diagonalCheck === 'XXX') {
                player = 'X';
                return player;
            } else if (rowCheck === 'OOO' || colCheck === 'OOO' || diagonalCheck === 'OOO') {
                player = 'O';
                return player;
            }
        }
    }
}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);