function sortedArray(numArray, order) {
    let ourCopy = [...numArray];
    let sorter = {
        'asc': (arr) => arr.sort((a, b) => a - b),
        'desc': (arr) => arr.sort((a, b) => b - a),
    }
    return sorter[order](ourCopy);
}

console.log(sortedArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortedArray([14, 7, 17, 6, 8], 'desc'));