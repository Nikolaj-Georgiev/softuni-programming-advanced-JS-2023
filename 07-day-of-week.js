function dayOfWeek(string) {
    let days = ['hui', 'Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];
    for (let i = 0; i < days.length; i++) {
        if (days[i] === string) {
            return i;
        }
    }
    return 'error'
}

console.log(dayOfWeek('Thirsday'));
// dayOfWeek('Friday');
// dayOfWeek('Invalid');