function factory(dic, list) {
    const resultArr = [];

    for (const obj of list) {
        const object = obj.template;
        let parts = obj.parts[0];
        if(obj.parts.length !== 1) {
            obj.parts.forEach(part => object[part] = dic[part])
            resultArr.push(object);
            continue;
        }
        object[parts] = dic[obj.parts];

        resultArr.push(object);
    };

    return resultArr;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const list = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];
const products = factory(library, list);
console.log(products);
products[3].play('Rick Astly', 'Never Gonna Give You Up');
