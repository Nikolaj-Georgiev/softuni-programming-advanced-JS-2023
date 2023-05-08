function heroicInventory(input) {
    const result = [];
    input.forEach(element => {
        let [name, level, ...items] = element.split(' / ');
        level = Number(level);
        if (items.length !== 0) {
            items = items[0].split(', ');
        }
        result.push({ name, level, items });
    });
    return JSON.stringify(result);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));
console.log('++++++++++++++++');
console.log(heroicInventory(['Jake / 1000']));