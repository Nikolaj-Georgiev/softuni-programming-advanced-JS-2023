function sortedArray(numArray, order) {
    numArray.sort((a, b) => (order === 'asc' ? a - b : b - a));
    return numArray;
}

console.log(sortedArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortedArray([14, 7, 17, 6, 8], 'desc'));