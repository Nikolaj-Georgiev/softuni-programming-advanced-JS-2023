function timeToWalk(steps, footprint, speedKmH) {

    let speedMSec = speedKmH / 3.6;
    let distanceInMeters = steps * footprint;
    let walkingTime = distanceInMeters / speedMSec;
    let restSecs = (distanceInMeters / 500 | 0) * 60;
    let totalTime = walkingTime + restSecs;
    let timeHours = totalTime / 3600 | 0;
    let timeMins = totalTime / 60 | 0;
    let timeSecs = Math.round(totalTime - timeMins * 60);

    console.log(`${timeHours.toFixed(0).padStart(2, '0')}:${(timeMins).toFixed(0).padStart(2, '0')}:${timeSecs.toFixed(0).padStart(2, '0')}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);