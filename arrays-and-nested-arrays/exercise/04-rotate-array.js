function rotateArray(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
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
        'Apple'
    ],
    15);

console.log(test1);
console.log(test2);