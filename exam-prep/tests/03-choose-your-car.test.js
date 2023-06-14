const {expect} = require('chai');
const {chooseYourCar} = require('../03-choose-your-car');
console.log(chooseYourCar);

describe('Testing choose your car object', function() {
    describe('Testing choosingType method', function() {
        it('should throw an error if the year is less than 1900 or more than  2022', function() {
            expect(() => chooseYourCar.choosingType('sdf', 'sdf', 1800)).to.throw();
            expect(() => chooseYourCar.choosingType('sdf', 'sdf', 2200)).to.throw();
        });
        it('should throw an error if the value of type is !== Sedan', function() {
            expect(() => chooseYourCar.choosingType('sdf', 'sdf', 1910)).to.throw();
        });
        it('should return expected messages when specific params are given', function() {
            let type = 'Sedan';
            let color = 'red';
            let year = 2011;
            let year1 = 2009;
            let year2 = 2010;
            expect(chooseYourCar.choosingType(type, color, year)).to.equal(`This ${color} ${type} meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType(type, color, year2)).to.equal(`This ${color} ${type} meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType(type, color, year1)).to.equal(`This ${type} is too old for you, especially with that ${color} color.`);
        });
     });
    describe('Testing brandName method', () => {
        it('should work as expected when given correct params', () => {
            let brands = ["BMW", "Toyota", "Peugeot"];
            expect(chooseYourCar.brandName(brands, 1)).to.equal('BMW, Peugeot');
        });
        it('should throw error when given string not arr.', () => {
            expect(() => chooseYourCar.brandName('brands', 1)).to.throw();
        });
        it('should throw error when given invalid index', () => {
            let brands = ["BMW", "Toyota", "Peugeot"];
            expect(() => chooseYourCar.brandName(brands, -1)).to.throw();
            expect(() => chooseYourCar.brandName(brands, '2')).to.throw();
            expect(() => chooseYourCar.brandName(brands, 3)).to.throw();
        });
    });
    describe('Testing carFuelConsumption method', () => {
        it('should throw error if one of the args is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption('2', 3)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(2, '3')).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(NaN, '3')).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(2, -3)).to.throw();
        });
        it('should throw error if one of the args is 0', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 3)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(2, 0)).to.throw();
        });
        it('should throw error if given only one param', () => {
            expect(() => chooseYourCar.carFuelConsumption( 3)).to.throw();
        });
        it('should work correct with numbers as args', () => {
            expect(chooseYourCar.carFuelConsumption(100, 3)).to.equal(`The car is efficient enough, it burns 3.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal(`The car burns too much fuel - 10.00 liters!`);
        });

    })
});
