class CarDealership{
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if ((model === '' || typeof model !== 'string') 
        || (!Number.isInteger(horsepower) || horsepower < 0) 
        || (typeof price !== 'number' || price < 0) 
        || (typeof mileage !== 'number' || mileage < 0)) {
            throw new Error ("Invalid input!");
        }

        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let soldCar = this.availableCars.filter(x => x.model === model)[0];
        if(soldCar === undefined) {
            throw new Error (`${model} was not found!`);
        }

        let soldPrice = 0;
        let differenceKm = soldCar.mileage - desiredMileage;

        if (differenceKm <= 0) {
            soldPrice = soldCar.price;
        } else if (differenceKm <= 40000) {
            soldPrice = soldCar.price * 0.95;
        } else {
            soldPrice = soldCar.price * 0.9;
        }

        this.availableCars = this.availableCars.filter(x => x.model !== model);
        this.soldCars.push({model, horsepower: soldCar.horsepower, soldPrice});
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`;
    }

    currentCar() {
        if(this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        let printedMessage = `-Available cars:\n`;
        this.availableCars.forEach(car => printedMessage += `---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$\n`);

        return printedMessage.trim();
    } 

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        let sortedSoldCars = this.soldCars.sort(this.sorter(criteria));
        let resultString = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${sortedSoldCars.length} cars sold:\n`;
        sortedSoldCars.forEach(car => resultString += `---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$\n`);

        return resultString.trim();
    }

    sorter(criteria) {
        if (criteria === 'horsepower') {
            return (a, b) => b.horsepower - a.horsepower;
        }
        if (criteria === 'model') {
            return (a, b) => a.model.localeCompare(b.model);
        }
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
