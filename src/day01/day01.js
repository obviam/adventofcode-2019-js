const Utils = require('../utils/utils');

const calculateFuelRequired = (mass) => {
    return Math.floor(mass / 3) - 2;
}

const calculate = (input) => {
    return input.reduce((acc, curr) => acc + calculateFuelRequired(curr), 0);
}

const result = () => {
    return calculate(Utils.readInput('day01/input.01.txt'));
}

console.log(result());

exports.calculateFuelRequired = calculateFuelRequired;
exports.calculate = calculate;
// show result
