function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ');
}

let test1 = rotateArray(['1',
        '2',
        '3',
        '4'
    ],
    2
);
let test2 = rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
        'Apple',
    ],
    15);

console.log(test1);
console.log(test2);