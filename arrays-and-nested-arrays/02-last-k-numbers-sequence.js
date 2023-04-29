function lastKNumbers(nSequence, kElements) {

    let result = [1];

    for (let i = 1; i < nSequence; i++) {
        if (result.length <= kElements) {
            result.push(result.reduce((a, v) => a + v));
        } else {
            let slicedArr = result.slice(result.length - kElements)
            result.push(slicedArr.reduce((a, v) => a + v));
        }
    }

    return result;
}

let test1 = lastKNumbers(6, 3);
let test2 = lastKNumbers(8, 2);

console.log(test1);
console.log(test2);