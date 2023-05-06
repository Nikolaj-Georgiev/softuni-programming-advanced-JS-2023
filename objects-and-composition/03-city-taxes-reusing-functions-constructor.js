function collectTaxes() {
    this.treasury += Math.floor(this.population * this.taxRate);
}
function applyGrowth(percentage){
    this.population += Math.floor(this.population * percentage / 100);
}
function applyRecession(percentage){
    this.treasury -= Math.floor(this.treasury * percentage / 100);
}

function cityTaxes(name, population, treasury) {

    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes,
        applyGrowth,
        applyRecession
    };

    return result;
}

const city1 = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city1);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);

console.log(city.collectTaxes === city1.collectTaxes);

