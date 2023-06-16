const bookSelection = require('../js-advanced-retake-exam-6-apr-2022/03-book-selection');
const { expect } = require('chai');

describe('Testing bookSelection', () => {
    describe('Testing isGenreSuitable method', () => {
        it('Should work on the happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
            expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(`Books with Thriller genre are not suitable for kids at 11 age`);
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
        });
        it('Should work on the happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 13)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal(`Those books are suitable`);
        });
    });
    describe('Testing isItAffordable method', () => {
        it('Should work with correct params', () => {
            expect(bookSelection.isItAffordable(10, 12)).to.equal(`Book bought. You have 2$ left`);
            expect(bookSelection.isItAffordable(12, 12)).to.equal(`Book bought. You have 0$ left`);
        });
        it('Should work give different message if not enough money', () => {
            expect(bookSelection.isItAffordable(13, 12)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(13, 0)).to.equal(`You don't have enough money`);
        });
        it('Should throw error with invalid input', () => {
            expect(() => bookSelection.isItAffordable('Thriller', 13)).to.throw();
            expect(() => bookSelection.isItAffordable('', 13)).to.throw();
            expect(() => bookSelection.isItAffordable(10, '15')).to.throw();
            expect(() => bookSelection.isItAffordable(10, ['15'])).to.throw();
        });
    });
    describe('Testing suitableTitles method', () => {
        it('Should work with correct params', () => {
            expect(() => bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Thriller' }, {title: 'Gosho', genre: 'Thriller'}], 'Thriller')).to.not.throw();
            expect(() => bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Thriller' }, {title: 'Gosho', genre: 'Horror'}], 'Horror')).to.not.throw();
            expect(() => bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Thriller' }], 'Thriller')).to.not.throw();
            expect(() => bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Horror' }], 'Horror')).to.not.throw();
            expect(bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Thriller' }], 'Thriller')).to.eql(['Pesho']);
            const res =  bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Horror' }], 'Horror');
            expect(bookSelection.suitableTitles([{ title: 'Pesho', genre: 'Horror' }], 'Horror').join(',')).to.equal('Pesho');
        });
        it('Should throw error with invalid input', () => {
            expect(() => bookSelection.suitableTitles('Thriller', '13')).to.throw();
            expect(() => bookSelection.suitableTitles(10, ['15'])).to.throw();
            expect(() => bookSelection.suitableTitles([10], 15)).to.throw();
        });
    });
})