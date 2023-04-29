function printWithDelimiter(array, delimiter) {
    console.log(array.join(delimiter));
}

printWithDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'
);
printWithDelimiter(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_'
);