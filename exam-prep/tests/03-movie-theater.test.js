const { expect } = require('chai');
const movieTheater = require('../js-advanced-retake-exam-10-aug-2022/03-movie-theater');


describe('Testing movieTheater', () => {
    describe('Testing ageRestrictions', () => {
        it('should act as expected if the value of the parameter movieRating  is equal to "G"', () => {
            expect(movieTheater.ageRestrictions('G')).to.equal(`All ages admitted to watch the movie`);
        });
        it('should act as expected if the value of the parameter movieRating  is equal to "PG"', () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal(`Parental guidance suggested! Some material may not be suitable for pre-teenagers`);
        });
        it('should act as expected if the value of the parameter movieRating  is equal to "R"', () => {
            expect(movieTheater.ageRestrictions('R')).to.equal(`Restricted! Under 17 requires accompanying parent or adult guardian`);
        });
        it('should act as expected if the value of the parameter movieRating  is equal to "NC-17"', () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal(`No one under 17 admitted to watch the movie`);
        });
        it('should act as expected if the value of the parameter movieRating  is equal to "other"', () => {
            expect(movieTheater.ageRestrictions('other')).to.equal(`There are no age restrictions for this movie`);
        });
    })
    describe('Testing moneySpent', () => {
        it('should throw an Error if the input is invalid', () => {
            expect(() => movieTheater.moneySpent('G', [1],[2])).to.throw();
            expect(() => movieTheater.moneySpent(1, '[1]',[2])).to.throw();
            expect(() => movieTheater.moneySpent(1, [1],'[2]')).to.throw();
        });
        it('should calculate total cost of thickets', () => {
            expect(movieTheater.moneySpent(2, [], [])).to.equal(`The total cost for the purchase is 30.00`);
            expect(movieTheater.moneySpent(4, [], [])).to.equal(`The total cost for the purchase with applied discount is 48.00`);
        });
        it('should calculate total cost of food', () => {
            expect(movieTheater.moneySpent(0, ['Nachos'], [])).to.equal(`The total cost for the purchase is 6.00`);
            expect(movieTheater.moneySpent(4, ['Nachos'], [])).to.equal(`The total cost for the purchase with applied discount is 52.80`);
            expect(movieTheater.moneySpent(0, ['Popcorn'], [])).to.equal(`The total cost for the purchase is 4.50`);
            expect(movieTheater.moneySpent(4, ['Popcorn'], [])).to.equal(`The total cost for the purchase with applied discount is 51.60`);
        });
        it('should calculate total cost of drinks', () => {
            expect(movieTheater.moneySpent(0, [], ['Soda'])).to.equal(`The total cost for the purchase is 2.50`);
            expect(movieTheater.moneySpent(4, [], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 50.00`);
            expect(movieTheater.moneySpent(0, [], ['Water'])).to.equal(`The total cost for the purchase is 1.50`);
            expect(movieTheater.moneySpent(4, [], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 49.20`);
        });
        it('should calculate total cost of tickets, food and drinks', () => {
            expect(movieTheater.moneySpent(0, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 8.50`);
            expect(movieTheater.moneySpent(4, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 53.60`);
            expect(movieTheater.moneySpent(0, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 7.50`);
            expect(movieTheater.moneySpent(4, ['Popcorn', 'Popcorn'], ['Water', 'Water'])).to.equal(`The total cost for the purchase with applied discount is 57.60`);
        });
    })
    describe('Testing reservation', () => {
        it('should throw an Error if the input is invalid', () => {
            expect(() => movieTheater.reservation(['G'], '1')).to.throw();
            expect(() => movieTheater.reservation('g', 1)).to.throw();
        });
        it('should work as expected with valid params', () => {
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 1)).to.not.throw();
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 1)).to.equal(2);
        });
    })
})