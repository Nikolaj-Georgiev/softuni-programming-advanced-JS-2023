function processor(input) {
    let list = [];
    const innerObject = {
        add: (value) => list.push(value),
        remove: (value) => list = list.filter(x => x !== value),
        print: () => console.log(list.join(','))
    }
    
    input.forEach(element => {
        let [command, value] = element.split(' ');
        if(command !== 'print') {
            innerObject[command](value);
        } else {
            innerObject[command]();
        }
    });
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
processor(['add pesho', 'add george', 'add peter', 'remove peter','print']);