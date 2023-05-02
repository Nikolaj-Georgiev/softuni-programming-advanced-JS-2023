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

function sortArrayByTwoCriteria2(input) {
    return input.sort(twoCriteriaSorting).join('\n');

    function twoCriteriaSorting(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}

console.log('++++++++++++++++++');
console.log(sortArrayByTwoCriteria2(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));