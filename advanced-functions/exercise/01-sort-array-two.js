function sortedArray(numArray, order) {
    const methods = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    };

    numArray.sort(methods[order]);
    return numArray;
}

console.log(sortedArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortedArray([14, 7, 17, 6, 8], 'desc'));