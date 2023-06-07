const {expect} = require('chai');
const {lookupChar} = require('./03-char-lookup');

describe('Testing lookupChar function', () => {
    it('works with string as first arg and integer as index', () => {
        expect(lookupChar('BAM', 1)).to.equal('A');
    });
    it('does not work with if first arg is not a string', () => {
        expect(lookupChar(12, 1)).to.be.undefined;
        expect(lookupChar(['ads'], 1)).to.be.undefined;
        expect(lookupChar({op:'Pesho'}, 1)).to.be.undefined;
    });
    it('does not work if second arg is not a number', () => {
        expect(lookupChar('Boom', '1')).to.be.undefined;
        expect(lookupChar('Boom', ['1'])).to.be.undefined;
        expect(lookupChar('Boom', {1:1})).to.be.undefined;
    });
    it('does not work if second arg is not an integer', () => {
        expect(lookupChar('Boom', 1.2)).to.be.undefined;
    });
    it('does not work with incorrect indexes', () => {
        expect(lookupChar('Boom', -1)).to.equal('Incorrect index');
        expect(lookupChar('Boom', 4)).to.equal('Incorrect index');
    });
});