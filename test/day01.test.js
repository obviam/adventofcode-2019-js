const expect = require('chai').expect;
const calculateFuelRequired = require('../src/day01/day01').calculateFuelRequired;

it('Should calculate fuel required', () => {
    expect(calculateFuelRequired(12)).to.equal(2);
    expect(calculateFuelRequired(14)).to.equal(2);
    expect(calculateFuelRequired(1969)).to.equal(654);
    expect(calculateFuelRequired(100756)).to.equal(33583);
})

it('Should execute day 01', () => {

})