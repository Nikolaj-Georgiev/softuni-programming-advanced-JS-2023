function townsToJSON(input) {
    const regex = /\s*\|\s*/;
    const headers = input[0].split(regex).filter(x => x !== '').map(header => header.trim());
    const [_, ...rows] = input;
    const result = rows.map(row => {
        const values = row.split(regex).filter(x => x !== '');
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = i > 0 ? Number(Number(values[i].trim()).toFixed(2)) : values[i].trim();
        });
        return obj;
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