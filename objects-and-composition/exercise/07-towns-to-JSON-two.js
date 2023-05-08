function townsToJSON(input) {
    const regex = /\s*\|\s*/;
    const [_, ...rows] = input; // skip the first row (headers)
    const result = rows.map(row => {
        const [town, latitude, longitude] = row.split(regex).filter(x => x !== '');
        return {
            Town: town.trim(),
            Latitude: Number(Number(latitude.trim()).toFixed(2)),
            Longitude: Number(Number(longitude.trim()).toFixed(2))
        };
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