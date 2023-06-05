const { expect } = require('chai');
const { rgbToHexColor } = require('./06-RGB-to-hex');

describe('Testing RGB to Hex function', () => {
    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF', 'Wrong color');
    });
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000', 'Wrong color');
    });
    it('fails if some of the integers is over 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
        expect(rgbToHexColor(0, 0, 256)).to.be.equal(undefined);
    });
    it('fails if some of the integers is under 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('fails if some param is missing', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
        expect(rgbToHexColor(0,)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('works in border cases where the 0 can be omitted', () => {
        expect(rgbToHexColor(15, 15, 15)).to.be.equal('#0F0F0F');
    });
    it('works with given color', () => {
        expect(rgbToHexColor(156, 107, 84)).to.be.equal('#9C6B54');
    })
    
});
