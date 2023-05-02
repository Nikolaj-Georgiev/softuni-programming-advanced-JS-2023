function ticTacToe(input) {
    const deckSize = 3;
    const playingDesk = Array.from({ length: deckSize }, () =>
        Array.from({ length: deckSize }, () => false)
    );

    let currentPlayer = 'X';
    let winner = '';

    for (let i = 0; i < input.length; i++) {
        const [row, col] = input[i].split(' ').map(Number);
        if (playingDesk[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        playingDesk[row][col] = currentPlayer;
        if (!winner) {
            winner = winnerChecker(playingDesk);
            if (winner) {
                console.table(`Player ${winner} wins!`);
                console.log(playingDesk.map((row) => row.join("\t")).join("\n"));
                return;
            } else if (
                playingDesk.every((row) => row.every((place) => place !== false))
            ) {
                console.log("The game ended! Nobody wins :(");
                console.log(playingDesk.map((row) => row.join("\t")).join("\n"));
                return;
            }
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function winnerChecker(arr) {
        for (let i = 0; i < deckSize; i++) {
            let rowCheck = "";
            let colCheck = "";
            let diagonal1Check = "";
            let diagonal2Check = "";
            for (let j = 0; j < deckSize; j++) {
                rowCheck += arr[i][j];
                colCheck += arr[j][i];
                diagonal1Check += arr[j][j];
                diagonal2Check += arr[j][deckSize - j - 1];
            }
            if (
                rowCheck === "XXX" ||
                colCheck === "XXX" ||
                diagonal1Check === "XXX" ||
                diagonal2Check === "XXX"
            ) {
                return "X";
            } else if (
                rowCheck === "OOO" ||
                colCheck === "OOO" ||
                diagonal1Check === "OOO" ||
                diagonal2Check === "OOO"
            ) {
                return 'O';
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