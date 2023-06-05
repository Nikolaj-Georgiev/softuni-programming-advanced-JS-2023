/*
•	Take an array as an argument
•	Return false for any input that isn’t of the correct type
•	Return true if the input array is symmetric
•	Otherwise, return false
*/
const { expect } = require('chai');
const { isSymmetric } = require('./05-check-for-symmetry.js');

describe('Testing case for isSymmetric', () => {
    it('returns false for non-array', () => {
        expect(isSymmetric(5,3)).to.be.false;
    })
    it('returns false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it ('works with the happy path', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true;      
    });
    it ('works with symmetric odd-length array length', () => {
        expect(isSymmetric([1,2,3,2,1])).to.be.true;    
    });
    it ('works with empty array', () => {
        expect(isSymmetric([])).to.be.false;      
    });
    it('works with array as args', () => {
        expect(Array.isArray([1, 2, 3])).to.be.true;
    });
    it('does not work if arg is not array', () => {
        expect(!Array.isArray([1, 2, 3])).to.be.false;
    });
    it('works with strings filled symmetric array', () => {
        expect(isSymmetric(['a','b','b','a'])).to.be.true;
    });
    it('returns false for type mismatched elements', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });

});