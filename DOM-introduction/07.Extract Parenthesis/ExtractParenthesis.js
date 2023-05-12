function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;
    let result = '';
    let match = pattern.exec(text);
    result += match;
    while(match !== null) {
        result += '; ' + match[1];
        match = pattern.exec(text);
    }
    return result;
}