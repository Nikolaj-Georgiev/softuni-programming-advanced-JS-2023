function extractIncreasingSubset(arr) {
    return arr.reduce((result, current) => {
        if (current >= result[result.length - 1] || result.length === 0) {
            result.push(current);
        }
        return result;
    }, []);
}

console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubset([]));
console.log(extractIncreasingSubset([20, 3, 2, 15, 6, 1]));