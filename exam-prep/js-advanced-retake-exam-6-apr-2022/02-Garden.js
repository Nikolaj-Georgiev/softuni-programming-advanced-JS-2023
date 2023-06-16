class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        let isPlant = this.plants.some(x => x.plantName === plantName);
        if (!isPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        let rippedPlant = this.plants.filter(x => x.plantName === plantName)[0];
        if (rippedPlant.ripe) {
            throw new Error (`The ${plantName} is already ripe.`)
        }
        rippedPlant.ripe = true;
        rippedPlant.quantity += quantity;
        let message = quantity === 1
            ? `${quantity} ${plantName} has successfully ripened.`
            : `${quantity} ${plantName}s have successfully ripened.`;
        return message;
    }

    harvestPlant(plantName) {
        let isPlant = this.plants.some(x => x.plantName === plantName);
        if (!isPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        let harvestedPlant = this.plants.filter(x => x.plantName === plantName)[0];
        if (harvestedPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants = this.plants.filter(x => x.plantName !== plantName);
        this.storage.push({ plantName: harvestedPlant.plantName, quantity: harvestedPlant.quantity });
        this.spaceAvailable += harvestedPlant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let resultMessage = `The garden has ${this.spaceAvailable} free space left.\n`;
        let sortedPlantNames = this.plants
            .map(plant => plant.plantName)
            .sort((a, b) => a.localeCompare(b))
            .join(', ');
        resultMessage += `Plants in the garden: ${sortedPlantNames}\n`;

        let plantsInStorage = this.storage.map(plant => `${plant.plantName} (${plant.quantity})`);

        let storageMessage = plantsInStorage.length > 0 ? plantsInStorage.join(', ') : 'The storage is empty.';
        resultMessage += `Plants in storage: ${storageMessage}`;
        return resultMessage;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
console.log(myGarden.generateReport());





