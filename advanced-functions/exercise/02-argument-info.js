function argumentsInfo(...args) {
    const types = {};
    if (args.length === 1) {
        return
    }

    for (const item of args) {
        let type = typeof item;
        if (!types[type]) {
            types[type] = 0;
        }
        types[type] += 1;       
        console.log(`${type}: ${item}`); 
    }

    Object.entries(types).sort((a,b) => b[1] - a[1]).forEach(tuple => console.log(`${tuple[0]} = ${tuple[1]}`));
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); });
console.log('++++++++++++++++++++');
argumentsInfo({ name: 'bob'}, 3.333, 9.999);
