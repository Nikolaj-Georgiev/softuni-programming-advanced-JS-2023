function wordsUpperCase(string) {

    let pattern = /[\w]+/g
    let result = [];
    let match = pattern.exec(string);
    while (match !== null) {
        result.push(match[0].toUpperCase());
        match = pattern.exec(string);
    }

    console.log(result.join(', '));
}

wordsUpperCase('');
wordsUpperCase('hello');