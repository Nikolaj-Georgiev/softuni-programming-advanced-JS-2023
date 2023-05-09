function townsToJSON(input) {
    const result = [];
    class Town {
        constructor (town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    input.slice(1).forEach(element => {
        let trimmedElement = element.split('|').map(e => e.trim()).filter(x => x).map(x => isNaN(x) ? x : Number(x).toFixed(2));
        let town = new Town(...trimmedElement);
        result.push(town);
    });

    return JSON.stringify(result);
}


console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));
console.log('+++++++++');
console.log(townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]));