const chai = require('chai');
const expect = require('chai').expect;
const assertArrays = require('chai-arrays');
const Utils = require('../src/utils/utils');

chai.use(assertArrays);

it('Should read input file into array of strings', () => {
    const result = Utils.readInput('../test/resources/input.test.txt');
    expect(result).to.be.array();
    expect(result).to.be.ofSize(5);
    expect(result[0]).to.equal('line 1');
    expect(result[1]).to.equal('line 2');
    expect(result[2]).to.equal('line 3');
    expect(result[3]).to.equal('line 4');
    expect(result[4]).to.equal('line 5');
})