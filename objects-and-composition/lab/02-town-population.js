function townPopulation(listOfTowns) {

    //iterate the list
    //parse elements
    //store result

    const result = {};

    for (const el of listOfTowns) {
        let [town, population] = el.split(' <-> ').map(x => isNaN(x) ? x : Number(x));
        if (result.hasOwnProperty(town)) {
            population += result[town];
        }
        result[town] = population;
    }
    //print result
    Object.entries(result).forEach(tuple => console.log(`${tuple[0]} : ${tuple[1]}`));
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