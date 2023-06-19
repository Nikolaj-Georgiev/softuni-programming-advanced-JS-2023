const { describe } = require('mocha');
const lottery = require('../js-advanced-exam-17-june-2023/03-lottery');
const { expect } = require('chai');

describe('Testing Lottery', () => {
    describe('Testing buyLotteryTicket', () => {
        it('should throw error with invalid input', () => {
            expect(() => lottery.buyLotteryTicket(1, 1, 1)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
            expect(() => lottery.buyLotteryTicket(1, '1', true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('1', 1, false)).to.throw('Unable to buy lottery ticket!');
            expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, 0, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(1, -1, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(-1, 1, true)).to.throw('Invalid input!');
        });
        it('should throw error if buy is false', () => {
            expect(() => lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
        });
        it('should work correct on the happy path', () => {
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal(`You bought 1 tickets for 1$.`);
            expect(lottery.buyLotteryTicket(1, 2, true)).to.equal(`You bought 2 tickets for 2$.`);
            expect(() => lottery.buyLotteryTicket(0, 1, true)).to.throw();
        });
    });
    describe('Testing checkTicket', () => {
        it('should throw error with invalid input', () => {
            expect(() => lottery.checkTicket(1, 1)).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1], '1')).to.throw('Invalid input!');
            expect(() => lottery.checkTicket('1', [1])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], [1])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw('');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw();
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw();
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])).to.throw();
        });
        it('should work correct on the happy path', () => {
            expect(lottery.checkTicket([0, 2, 3, 4, 5, 6], [0, 2, 3, 4, 5, 7])).to.equal(`Congratulations you win, check your reward!`);
            expect(lottery.checkTicket([1, 2, 3, 3, 3, 3], [1, 2, 3, 5, 5, 4])).to.equal(`Congratulations you win, check your reward!`);
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal(`You win the JACKPOT!!!`);
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])).to.be.undefined; 
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket([2, 2, 3, 4, 5, 6], [2, 2, 7, 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, '7', 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket(['1', 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket(['ads', 2, 3, 4, 5, 6], [1, 2, 7, 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 'asd', 7, 8, 9, 10])).to.be.undefined;
            expect(lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1])).to.be.undefined;
        });
    });
    describe('Testing secondChance', () => {
        it('should throw error with invalid input', () => {
            expect(() => lottery.secondChance(1, 1)).to.throw('Invalid input!');
            expect(() => lottery.secondChance([1], '1')).to.throw('Invalid input!');
            expect(() => lottery.secondChance('1', [1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(undefined, [1])).to.throw('Invalid input!');
            expect(() => lottery.secondChance(1, { '1': 1 })).to.throw('Invalid input!');
            expect(() => lottery.secondChance([1, 2], [1, 2])).to.throw('Invalid input!');
            expect(lottery.secondChance(1, [])).to.equal('Sorry, your ticket didn\'t win!');
        });
        it('should work correct on the happy path', () => {
            expect(lottery.secondChance(1, [1, 2, 3, 4, 5, 7])).to.equal(`You win our second chance prize!`);
            expect(lottery.secondChance(1, [1, 1, 3, 4, 5, 7])).to.equal(`You win our second chance prize!`);
            expect(lottery.secondChance(NaN, [1, 1, 3, 4, 5, 7])).to.equal(`Sorry, your ticket didn\'t win!`);
            expect(lottery.secondChance(1, [1])).to.equal(`You win our second chance prize!`);
            expect(lottery.secondChance(0, [2, 3, 5, 5, 4])).to.equal(`Sorry, your ticket didn't win!`);
            expect(lottery.secondChance(1, [2, 3, 4, 5, 6, 7])).to.equal('Sorry, your ticket didn\'t win!');
            expect(lottery.secondChance(-1, [2, 3, 4, 5, 6, 7])).to.equal('Sorry, your ticket didn\'t win!');
            expect(lottery.secondChance(1, [1, 1, 4, 5, 6, 7])).to.equal('You win our second chance prize!');
        });
    });
});