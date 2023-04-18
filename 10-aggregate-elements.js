function aggregate(input) {
    let result = '';
    let sumOfElements = input.reduce((a, c) => a + c, 0);
    result += sumOfElements + '\n';
    let invertedSumOfElements = input.map(x => 1 / x).reduce((a, c) => a + c, 0);
    result += invertedSumOfElements + '\n';
    let concatElements = input.map(x => x.toString()).reduce((a, c) => a + c, '');
    result += concatElements;
    return result;
}

console.log(aggregate([1, 2, 3]));
console.log(aggregate([2, 4, 8, 16]));