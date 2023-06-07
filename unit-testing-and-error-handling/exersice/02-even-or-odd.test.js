const {expect} = require('chai');
const {isOddOrEven} = require('./02-even-or-odd');

describe('Testing the isOddOrEven function', () => {
    it('Works correct with strings', () => {
        expect(isOddOrEven('Boom')).to.equal('even');
        expect(isOddOrEven('BAM')).to.equal('odd');
    });
    it('Does not work with numbers', () => {
        expect(isOddOrEven(3)).to.be.undefined;
    });
    it('Does not work with arrays', () => {
        expect(isOddOrEven(['asd'])).to.be.undefined;
    });
    it('Does not work with object', () => {
        expect(isOddOrEven({asd: 'aasd'})).to.be.undefined;
    });
    it('Works correct with strings', () => {
        expect(isOddOrEven('')).to.equal('even');
    });

});