function evenPosition(input) {
    let result = input
        .filter((x, i) => i % 2 === 0)
        .join(' ');

    console.log(result);
}

evenPosition(['20', '30', '40', '50', '60']);
evenPosition(['5', '10']);