const expect = require('chai').expect;
const calculateFuelRequired = require('../src/day01/day01').calculateFuelRequired;
const calculateFuelWithFuel = require('../src/day01/day01').calculateFuelWithFuel;

it('Should calculate fuel required for mass', () => {
    expect(calculateFuelRequired(12)).to.equal(2);
    expect(calculateFuelRequired(14)).to.equal(2);
    expect(calculateFuelRequired(1969)).to.equal(654);
    expect(calculateFuelRequired(100756)).to.equal(33583);
})

it('Should calculate fuel required for mass with fuel', () => {
    expect(calculateFuelWithFuel(14, 0)).to.equal(2);
    expect(calculateFuelWithFuel(1969, 0)).to.equal(966);
    expect(calculateFuelWithFuel(100756, 0)).to.equal(50346);
})
