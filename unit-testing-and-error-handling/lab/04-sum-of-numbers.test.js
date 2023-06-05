const expect = require('chai').expect;
let { sum } = require('./04-sum-of-numbers');


describe('Test Suite', () => {
    it('works with positive integers', () => {
        expect(sum([2, 4])).to.equal(6, 'Did not work with 2 and 4');
    }); 
    it('works with floating point', () => {
        expect(sum([2.3, 4.2])).to.equal(6.5,'Did not work with floating point numbers');
    });
    it('works with array as args', () => {
        expect(Array.isArray([1, 2, 3])).to.be.true;
    })
});