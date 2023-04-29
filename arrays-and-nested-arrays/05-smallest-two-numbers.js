function smallestOfTwo(input) {

    const result = [];

    let newArr = input.sort((a, b) => a - b);
    result.push(...newArr.slice(0, 2));
    console.log(result.join(' '));
}

smallestOfTwo([30, 15, 50, 5]);
smallestOfTwo([3, 0, 10, 4, 7, 3]);