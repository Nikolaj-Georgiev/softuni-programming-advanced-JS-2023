const { expect } = require('chai');
const { createCalculator } = require('./07-add-subtract');

describe('Testing for returning of object and it\'s functionalities', () => {
    it('returns object of type object', () => {
        const obj = createCalculator();
        expect(typeof obj === 'object').to.be.true;
    });
    it('returns object that have properties add, subtract and get', () => {
        const obj = createCalculator();
        expect(typeof obj.add === 'function').to.be.true;
        expect(typeof obj.subtract === 'function').to.be.true;
        expect(typeof obj.get === 'function').to.be.true;
    });
    it('keeps internal sum that can be modified and get from outside', () => {
        const obj = createCalculator();
        let testingSum = obj.get();
        expect(testingSum === 0).to.be.true;
        obj.add(1);
        testingSum = obj.get();
        expect(testingSum).to.equal(1);
        obj.subtract(1);
        testingSum = obj.get();
        expect(testingSum).to.equal(0);
    });
    it('can pars stringified number as string', () => {
        const obj = createCalculator();
        obj.add('1');
        expect(obj.get()).to.equal(1);
        obj.add('2');
        obj.subtract('1');
        expect(obj.get()).to.equal(2);
    });
    it('can work with floating point numbers', () => {
        const obj = createCalculator();
        obj.add(1.2);
        obj.add(2.2);
        expect(Number(obj.get().toFixed(1))).to.equal(3.4);
        obj.subtract(1.1);
        expect(Number(obj.get().toFixed(1))).to.equal(2.3);
    });
    it('can work with negative numbers', () => {
        const obj = createCalculator();
        obj.add(-2);
        obj.subtract(-1);
        expect(obj.get()).to.equal(-1);
    });
})
