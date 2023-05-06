function townPopulation(listOfTowns) {
    const result = {};

    const tuples = listOfTowns.map(line => line.split(' <-> ').map(x => isNaN(x) ? x : Number(x)));
    tuples.forEach(tup => {
        result.hasOwnProperty(tup[0]) ? result[tup[0]] += tup[1] : result[tup[0]] = tup[1];
    });
    for (const key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
console.log('++++++++++++++++++');
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);