function roadRadar(speedString, area) {
    let speed = Number(speedString);
    let motorwayLimit = 130;
    let interstateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    switch (area) {
        case 'motorway':
            console.log(zoneSpeedChecker(speed, motorwayLimit));
            break;
        case 'interstate':
            console.log(zoneSpeedChecker(speed, interstateLimit));
            break;
        case 'city':
            console.log(zoneSpeedChecker(speed, cityLimit));
            break;
        case 'residential':
            console.log(zoneSpeedChecker(speed, residentialLimit));
            break;
    }

    function zoneSpeedChecker(speed, zone) {
        let diff = speed - zone;
        if (speed <= zone) {
            return `Driving ${speed} km/h in a ${zone} zone`;
        }
        return `The speed is ${diff} km/h faster than the allowed speed of ${zone} - ${statusCheck(diff)}`;
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