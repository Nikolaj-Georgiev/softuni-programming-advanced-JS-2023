class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    get retailer() {
        return this._retailer;
    }

    set retailer(string) {
        if (typeof string !== 'string' || string === '') {
            throw new Error('The argument must be a string!');
        }
        this._retailer = string;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === undefined || storage === undefined || price === undefined || condition === undefined) {
            throw new Error('Invalid smartphone!');
        }
        if (!this.stingChecker(model) || !this.stingChecker(condition)) {
            throw new Error('Invalid smartphone!');
        }
        if (!this.numberChecker(price)) {
            throw new Error('Invalid smartphone!');
        }
        if (storage < 0 || !Number.isInteger(storage)) {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {
        let [phone, index] = [...this.phoneAndIndexChecker(model)];
        if (!phone) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice = this.storageChecker(desiredStorage, phone);
        this.availableSmartphones.splice(index, 1);
        let soldModel = phone.model;
        let soldStorage = phone.storage;
        this.soldSmartphones.push({ soldModel, soldStorage, soldPrice });
        this.revenue += soldPrice;
        return `${soldModel} was sold for ${soldPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }
        this.availableSmartphones.forEach(x => x.storage *= 2);
        let resultForPrinting = ` Upgraded Smartphones:\n`;
        this.availableSmartphones.forEach(phone => {
            resultForPrinting += `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$\n`;
        });
        return resultForPrinting.trim();
    }

    salesJournal(criteria) {
        if(criteria !== 'storage' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        this.soldSmartphones = this.soldSmartphones.sort(this.sortingByCriteria(criteria));
        let finalResult = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:\n`;
        this.soldSmartphones.forEach(phone => {
            finalResult += `${phone.soldModel} / ${phone.soldStorage} GB / ${phone.soldPrice.toFixed(2)}$\n`;
        });

        return finalResult.trim();
    }

    sortingByCriteria(criteria) {
        if (criteria === 'storage') {
            return (a, b) => b.soldStorage - a.soldStorage;
        }
        if (criteria === 'model') {
            return (a, b) => a.soldModel.localeCompare(b.soldModel);
        }
    }

    storageChecker(storage, phone) {
        if (storage < 0 || !Number.isInteger(storage)) {
            throw new Error('Invalid smartphone!');
        }
        return phone.storage >= storage ? phone.price : (Math.abs(phone.storage - storage) <= 128 ? phone.price *= 0.9 : phone.price *= 0.8);
    }

    phoneAndIndexChecker(model) {
        if (!this.stingChecker(model)) {
            throw new Error('Invalid smartphone!');
        }
        let phone = this.availableSmartphones.find(x => x.model === model);
        let index = this.availableSmartphones.indexOf(phone);
        return [phone, index];
    }

    stingChecker(sting) {
        return typeof sting === 'string' ? (sting === '' ? false : true) : false;
    }

    numberChecker(number) {
        return typeof number === 'number' ? (number < 0 ? false : true) : false;
    }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));


