function addAndRemove(commandsArr) {
    if (commandsArr.length < 1) {
        return 'Empty';
    }
    let counter = 0;
    let result = [];

    commandsArr.forEach(command => {
        counter++;
        if (command === 'add') {
            result.push(counter);
        } else {
            result.pop();
        }
    });

    if (result.length) {
        return result.join('\n');
    } else {
        return 'Empty';
    }
}

let test1 = addAndRemove(['add',
    'add',
    'add',
    'add'
]);
let test2 = addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add'
]);
let test3 = addAndRemove(['remove',
    'remove',
    'remove'
]);

console.log(test1);
console.log('+++++++++++++');
console.log(test2);
console.log('+++++++++++++');
console.log(test3);