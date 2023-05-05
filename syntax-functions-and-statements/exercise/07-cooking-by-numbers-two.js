function cooking(numAsString, ...commands) {

    let number = Number(numAsString);
    const cooker = {
        chop() {number /= 2},
        dice() {number = Math.sqrt(number)},
        spice() {++number},
        bake() {number *= 3},
        fillet() {number = number - number * 0.2}
    }
    
    commands.forEach(op => {
       cooker[op](number);
        console.log(number);
    });    
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('+++++++++++++++++');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');