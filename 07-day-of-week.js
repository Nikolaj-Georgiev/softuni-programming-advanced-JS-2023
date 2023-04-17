function dayOfWeek(string) {
    let days = ['hui', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 0; i < days.length; i++) {
        if (days[i] === string) {
            return i;
        }
    }
    return 'error';
}

console.log(dayOfWeek('Thursday'));
dayOfWeek('Friday');
dayOfWeek('Invalid');

function dayOfWeek1(param) {
    let days = ['hui', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let result = 0;
    days.forEach((x, i) => {
        if (x === param) {
            result = i;
            return result;
        }
    });
    if (result) {
        return result;
    } else {
        return 'error';
    }
}


console.log(dayOfWeek1('Thursday'));
