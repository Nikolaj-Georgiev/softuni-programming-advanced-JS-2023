function printNthElement(arrayOfStrings, numberN) {
    let result = [];

    for (let i = 0, len = arrayOfStrings.length; i < len; i += numberN) {
        result.push(arrayOfStrings[i]);
    }

    return result;
}

let test1 = printNthElement(
    ['5',
        '20',
        '31',
        '4',
        '20'
    ], 2);
let test2 = printNthElement(
    ['dsa',
        'asd',
        'test',
        'tset'
    ], 2);

let test3 = printNthElement(
    ['1',
        '2',
        '3',
        '4',
        '5'
    ], 6);

console.log(test1);
console.log(test2);
console.log(test3);