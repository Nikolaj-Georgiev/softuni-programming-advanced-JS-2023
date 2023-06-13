const PaymentPackage = require('./12-Payment-Package');
const { expect } = require('chai');

describe('Payment Package testing set', () => {
    it('works correct when instantiated with two parameters - a string name and number value', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        let expected = `Package: Babaluga
- Value (excl. VAT): 5
- Value (VAT 20%): 6`;
        expect(t1.toString()).to.equal(expected);
    });
    it('throws Error when instantiated with one parameter', () => {
        let t1;
        expect(() => (t1 = new PaymentPackage('Babaluga'))).to.throw();
        expect(() => (t1 = new PaymentPackage(5))).to.throw();
    });
    it('It\'s accessor name get and set value of the name', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        let expected = 'Babaluga';
        let expected1 = 'Pencho';
        expect(t1.name).to.equal(expected);
        expect(t1.name = expected1).to.equal(expected1);
    });
    it('It\'s accessor name throws Error when given empty string', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        expect(() => (t1.name = '')).to.throw();
    });
    it('It\'s accessor value get and set value of the value', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        let expected = 5;
        let expected1 = 6;
        let expected2 = 0;
        expect(t1.value).to.equal(expected);
        expect(t1.value = expected1).to.equal(expected1);
        expect(t1.value = expected2).to.equal(expected2);
    });
    it('It\'s accessor value throws Error when given negative number', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        expect(() => (t1.value = -1)).to.throw();
    });
    it('It\'s accessor value throws Error when given NaN', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        expect(() => (t1.value = NaN)).to.throw('NaN is not a number');
    });
    it('It\'s accessor VAT get and set value of the value', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        let expected = 20;
        let expected1 = 30;
        expect(t1.VAT).to.equal(expected);
        expect(t1.VAT = expected1).to.equal(expected1);
        expect(() => (t1.VAT = -1)).to.throw();
    });
    it('It\'s accessor active get and set value of the active', () => {
        let t1 = new PaymentPackage('Babaluga', 5);
        let expected = true;
        let expected1 = false;
        expect(t1.active).to.equal(expected);
        expect(t1.active = expected1).to.equal(expected1);
    });
    it('It\'s toString method to return a string, containing an overview of the instance; if the package is not active, append the label "(inactive)" to the printed name', () => {
        const wrongPack = new PaymentPackage('Transfer Fee', 100);
        let expected = `Package: Transfer Fee
- Value (excl. VAT): 100
- Value (VAT 20%): 120`;
        let expected1 = `Package: Transfer Fee (inactive)
- Value (excl. VAT): 100
- Value (VAT 20%): 120`;
        expect(wrongPack.toString()).to.equal(expected);
        wrongPack.active = false;
        expect(wrongPack.toString()).to.equal(expected1);
        expect(() => (wrongPack.active = null)).to.throw();
    });
    it('It\'s toString method to throw an Error when given null ot it\'s active accessor', () => {
        const wrongPack = new PaymentPackage('Transfer Fee', 100);
        expect(() => (wrongPack.active = null)).to.throw();
    });
});