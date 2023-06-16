const { describe } = require('mocha');
const carService = require('../js-advanced-exam-25-jun-2022/03-car-service');
const { expect } = require('chai');

describe('Testing carService', () => {
    describe('Testing isItExpensive', () => {
        it('Should work correct on the happy path', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Babaluga')).to.equal(`The overall price will be a bit cheaper`);
        });
    });
    describe('Testing discount', () => {
        it('Should throw error with invalid input', () => {
            expect(() => carService.discount('Engine', 1)).to.throw();
            expect(() => carService.discount(1, 'Transmission')).to.throw();
        });
        it('Should correct on the happy path', () => {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved 15$`);
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved 30$`);
            expect(carService.discount(2, 100)).to.equal(`You cannot apply a discount`);
            expect(carService.discount(1, 100)).to.equal(`You cannot apply a discount`);
        });
    });
    describe('Testing partsToBuy', () => {
        it('Should throw error with invalid input', () => {
            expect(() => carService.partsToBuy('Engine', [1])).to.throw();
            expect(() => carService.partsToBuy([1], 'Transmission')).to.throw();
            expect(() => carService.partsToBuy([1], 1)).to.throw();
            
        });
        it('Should correct on the happy path', () => {
            expect(carService.partsToBuy([], [1])).to.equal(0);
            expect(carService.partsToBuy([{part: 'blowoff valve', price: 145 }, { part: 'coil springs', price: 230 }], ['blowoff valve'])).to.equal(145);
            expect(carService.partsToBuy([{part: 'blowoff valve', price: 145 }, { part: 'coil springs', price: 230 }], ['blowoff valve', 'coil springs'])).to.equal(375);

        });
    });
})