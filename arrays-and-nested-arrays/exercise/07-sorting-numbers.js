function sortingNumbers(input) {

    /*if (!Array.isArray(input)) {
        return "Error: argument is not an array";
    }*/

    const sortedAscendingArr = input.sort((a, b) => a - b);
    const result = [];
    for (let i = 0, len = Math.ceil(sortedAscendingArr.length / 2); i < len; i++) {
        let smallest = sortedAscendingArr[i];
        let biggest = sortedAscendingArr[(sortedAscendingArr.length - 1) - i];
        if (i === Math.floor(sortedAscendingArr.length / 2) && sortedAscendingArr.length % 2 === 1) {
            result.push(smallest);
            break;
        }
        result.push(smallest, biggest);
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, ]));
console.log('+++++++++++++++++++');
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));