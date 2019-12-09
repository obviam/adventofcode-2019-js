const expect = require('chai').expect;
const isValidPassword = require('../src/day04/day04').isValidPassword;
const isValidPasswordV2 = require('../src/day04/day04').isValidPasswordV2;

describe('Day 4', () => {
    it ('should find valid combinations', () => {
        expect(isValidPassword('111111')).to.be.true;
        expect(isValidPassword('223450')).to.be.false;
        expect(isValidPassword('123789')).to.be.false;
    });

    it ('should find valid combinations for v2', () => {
        expect(isValidPasswordV2('112233')).to.be.true;
        expect(isValidPasswordV2('123444')).to.be.false;
        expect(isValidPasswordV2('111122')).to.be.true;
        expect(isValidPasswordV2('111222')).to.be.false;
    });
})