const expect = require("chai").expect;
const compute = require("../src/day02/day02").compute;

describe("Day 2", () => {
  it("should compute the correct result for batch 1", () => {
    const input = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
    const output = [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
    expect(compute(input)).to.deep.equal(output);
  });

  it("should compute the correct result for batch 2", () => {
    const input = [1, 0, 0, 0, 99];
    const output = [2, 0, 0, 0, 99];
    expect(compute(input)).to.deep.equal(output);
  });

  it("should compute the correct result for batch 3", () => {
    const input = [2, 3, 0, 3, 99];
    const output = [2, 3, 0, 6, 99];
    expect(compute(input)).to.deep.equal(output);
  });

  it("should compute the correct result for batch 4", () => {
    const input = [2, 4, 4, 5, 99, 0];
    const output = [2, 4, 4, 5, 99, 9801];
    expect(compute(input)).to.deep.equal(output);
  });

  it("should compute the correct result for batch 4", () => {
    const input = [1,1,1,4,99,5,6,0,99];
    const output = [30,1,1,4,2,5,6,0,99];
    expect(compute(input)).to.deep.equal(output);
  });
});
