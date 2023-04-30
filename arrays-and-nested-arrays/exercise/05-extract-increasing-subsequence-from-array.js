function extractIncreasingSubset(arrayOfNumbers) {
    let resultArr = [];
    let biggest = arrayOfNumbers[0];

    for (let i = 0, len = arrayOfNumbers.length; i < len; i++) {
        if (biggest <= arrayOfNumbers[i]) {
            biggest = arrayOfNumbers[i];
            resultArr.push(biggest);
        }
    }
    return resultArr;
}

console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubset([]));
console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));