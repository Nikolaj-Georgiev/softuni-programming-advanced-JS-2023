function negativePositive(input) {

    let result = [];
    input.forEach(x => {
        if (x >= 0) {
            return result.push(x);
        } else {
            return result.unshift(x);
        }
    })

    console.log(result.join('\n'));

}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);