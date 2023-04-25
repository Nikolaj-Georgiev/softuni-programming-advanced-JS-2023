function roadRadar(speedString, area) {
    let speed = Number(speedString);
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch (area) {
        case 'motorway':
            {
                let diff = speed - motorwayLimit;
                speed <= motorwayLimit ? console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`) : console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorwayLimit} - ${statusCheck(diff)}`);
            }
            break;
        case 'interstate':
            {
                let diff = speed - interstateLimit;
                speed <= interstateLimit ? console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`) : console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstateLimit} - ${statusCheck(diff)}`);
            }
            break;
        case 'city':
            {
                let diff = speed - cityLimit;
                speed <= cityLimit ? console.log(`Driving ${speed} km/h in a ${cityLimit} zone`) : console.log(`The speed is ${diff} km/h faster than the allowed speed of ${cityLimit} - ${statusCheck(diff)}`);
            }
            break;
        case 'residential':
            {
                let diff = speed - residentialLimit;
                speed <= residentialLimit ? console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`) : console.log(`The speed is ${diff} km/h faster than the allowed speed of ${residentialLimit} - ${statusCheck(diff)}`);
            }
            break;
    }

    function statusCheck(diff) {
        if (diff <= 20) {
            return 'speeding';
        } else if (diff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');