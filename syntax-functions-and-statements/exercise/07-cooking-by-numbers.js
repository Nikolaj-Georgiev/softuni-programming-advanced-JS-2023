function cooking(numAsString, ...commands) {

    let number = Number(numAsString);

    commands.forEach(op => {
        switch (op) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                ++number;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = number - number * 0.2;
                break;
        }
        console.log(number);
    });
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('+++++++++++++++++');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');