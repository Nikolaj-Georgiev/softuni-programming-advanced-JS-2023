function sortArrayByTwoCriteria(input) {
    return input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join('\n');
}

console.log(sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log('++++++++++++++++++');
console.log(sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
console.log('++++++++++++++++++');
console.log(sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']));