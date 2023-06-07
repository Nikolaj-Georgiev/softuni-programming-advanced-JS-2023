const { expect } = require('chai');
const { mathEnforcer } = require('./04-math-enforcer');

describe('testing mathEnforcer functionalities', () => {
    describe('testing the addFive method', () => {
        // testing happy path
        it('works with num as arg', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('works with negative integer', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('works with floating point number', () => {
            expect(mathEnforcer.addFive(5.5)).to.be.closeTo(10.5, 0.01, '\'Ko stana, \'shto ne bachka?');
        });
        it('doesn\'t works with string as arg', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });
        it('doesn\'t works with empty string as arg', () => {
            expect(mathEnforcer.addFive('')).to.be.undefined;
        });
        it('doesn\'t works with array as arg', () => {
            expect(mathEnforcer.addFive([5])).to.be.undefined;
        });
        it('doesn\'t works with object as arg', () => {
            expect(mathEnforcer.addFive({ a: 5 })).to.be.undefined;
        });
    });
    describe('testing the subtractTen method', () => {
        it('works with num as arg', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('works with negative integer', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('works with floating point number', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.approximately(0.5, 0.01, '\'Ko stana, \'shto ne bachka?');
        });
        it('doesn\'t works with string as arg', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });
        it('doesn\'t works with empty string as arg', () => {
            expect(mathEnforcer.subtractTen('')).to.be.undefined;
        });
        it('doesn\'t works with array as arg', () => {
            expect(mathEnforcer.subtractTen([5])).to.be.undefined;
        });
        it('doesn\'t works with object as arg', () => {
            expect(mathEnforcer.subtractTen({ a: 5 })).to.be.undefined;
        });
    })
    describe('testing sum method', () => {
        it('works with nums as args', () => {
            expect(mathEnforcer.sum(5, 10)).to.equal(15);
        });
        it('works with negative integers', () => {
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });
        it('works with floating point numbers', () => {
            expect(mathEnforcer.sum(-5.5, -10.1)).to.be.closeTo(-15.6, 0.01, '\'Ko stana, \'shto ne bachka?');
        });
        it('doesn\'t works with string as args', () => {
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
        });
        it('doesn\'t works with string as one of the args', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });
        it('doesn\'t works with array as arg', () => {
            expect(mathEnforcer.sum([5, 5])).to.be.undefined;
        });
        it('doesn\'t works with object as arg', () => {
            expect(mathEnforcer.sum({ a: 5, b:5 })).to.be.undefined;
        });
    })
});