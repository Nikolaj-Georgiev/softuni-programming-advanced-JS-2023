function sumFirstLast(input) {

    let resultArr = input.map(Number);
    let first = resultArr.shift();
    let last = resultArr.pop();

    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));