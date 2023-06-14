const { expect } = require('chai');
const weddingDay = require('../js-advanced-exam-retake-05-april-2023/03-wedding-day');

describe('Testing weddingWay object', () => {
  describe('Testing PickVenue\'s functionalities', () => {
    it('should throw error if some of the params are of invalid type', () => {
      expect(() => weddingDay.pickVenue('1', 2, 'Varna')).to.throw();
      expect(() => weddingDay.pickVenue(2, '1', 'Varna')).to.throw();
      expect(() => weddingDay.pickVenue(2, 2, '')).to.throw();
    });
    it('should throw error if given less params', () => {
      expect(() => weddingDay.pickVenue('1', _, 'Varna')).to.throw();
    });
    it('should throw error if location is different from Varna', () => {
      expect(() => weddingDay.pickVenue(2, 2, 'Plovdiv')).to.throw();
    });
    it('should work es expected with given params', () => {
      expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
      expect(weddingDay.pickVenue(160, 110, 'Varna')).to.equal('This venue meets the requirements, with capacity of 160 guests and 110$ cover.');
      expect(weddingDay.pickVenue(140, 110, 'Varna')).to.equal('This venue does not meet your requirements!');
      expect(weddingDay.pickVenue(160, 130, 'Varna')).to.equal('This venue does not meet your requirements!');
    });
  });
  describe('Testing otherSpendings\'s functionalities', () => {
    it('should throw error if some of the params are of invalid type', () => {
      expect(() => weddingDay.otherSpendings('1', [2], true)).to.throw();
      expect(() => weddingDay.otherSpendings([2], '1', false)).to.throw();
      expect(() => weddingDay.otherSpendings([2], [2], 'hujnja')).to.throw();
      expect(() => weddingDay.otherSpendings({ '2': 2 }, [2], 'hujnja')).to.throw();
    });
    it('should throw error if given less params', () => {
      expect(() => weddingDay.otherSpendings([2], [2])).to.throw();
    });
    it('should work as expected on the happy path with discount', () => {
      expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal('You spend 1020$ for wedding decoration and photography with 15% discount!');
      expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal('You spend 1445$ for wedding decoration and photography with 15% discount!');
    });
    it('should work as expected on the happy path without discount', () => {
      expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
      expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal('You spend 1700$ for wedding decoration and photography!');
    });
  });
  describe('Testing tableDistribution\'s functionalities', () => {
    it('should throw error if given invalid params', () => {
      expect(() => weddingDay.tableDistribution('1', 1)).to.throw();
      expect(() => weddingDay.tableDistribution(1, '1')).to.throw();
      expect(() => weddingDay.tableDistribution(-1, 1)).to.throw();
      expect(() => weddingDay.tableDistribution(1, -1)).to.throw();
      expect(() => weddingDay.tableDistribution(1, 0)).to.throw();
      expect(() => weddingDay.tableDistribution(0, 1)).to.throw();
    });;
    it('should work as expected on the happy path', () => {
      expect(weddingDay.tableDistribution(10, 2)).to.equal('There is only 5 people on every table, you can join some tables.');
      expect(weddingDay.tableDistribution(20, 2)).to.equal('You have 2 tables with 10 guests on table.');
    });
  });
});
