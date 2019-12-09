const expect = require('chai').expect;
const isValidPassword = require('../src/day04/day04').isValidPassword;

describe('Day 4', () => {
    it ('should find valid combinations', () => {
        expect(isValidPassword('111111')).to.be.true;
        expect(isValidPassword('223450')).to.be.false;
        expect(isValidPassword('123789')).to.be.false;
    });
})