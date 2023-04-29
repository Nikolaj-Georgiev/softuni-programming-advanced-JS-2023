function biggerHalf(input) {

    const result = input.sort((a, b) => a - b).slice(-Math.ceil(input.length / 2));
    return result;
}

let test1 = biggerHalf([4, 7, 2, 5]);
let test2 = biggerHalf([3, 19, 14, 7, 2, 19, 6]);

console.log(test1);
console.log(test2);