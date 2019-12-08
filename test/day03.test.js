const expect = require("chai").expect;
const computeShortestDistance = require("../src/day03/day03").computeShortestDistance;

describe("Day 3", () => {

  it("should compute the correct result for batch 1", () => {
    const input1 = 'R75,D30,R83,U83,L12,D49,R71,U7,L72';
    const input2 = 'U62,R66,U55,R34,D71,R55,D58,R83';
    expect(computeShortestDistance(input1, input2)).to.equal(159);
  });

  it("should compute the correct result for batch 1", () => {
    const input1 = 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51';
    const input2 = 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7';
    expect(computeShortestDistance(input1, input2)).to.equal(135);
  });
});
