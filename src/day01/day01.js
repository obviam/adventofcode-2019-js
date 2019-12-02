const Utils = require('../utils/utils');

const calculateFuelRequired = (mass) => {
    return Math.floor(mass / 3) - 2;
}

const calculateFuelWithFuel = (mass) => {
    const fuel = calculateFuelRequired(mass);
    if (fuel <= 0) return 0; 

    return fuel + calculateFuelWithFuel(fuel);
}

const calculate = (input, calculator) => {
    return input.reduce((acc, curr) => acc + calculator(curr), 0);
}

const executeAndPrint = () => {
    const star1 = calculate(Utils.readInput('day01/input.01.txt'), calculateFuelRequired);
    const star2 = calculate(Utils.readInput('day01/input.01.txt'), calculateFuelWithFuel);
    console.log('Result star/day 1/01: ' + star1);
    console.log('Result star/day 2/01: ' + star2);
}

exports.calculateFuelRequired = calculateFuelRequired;
exports.calculateFuelWithFuel = calculateFuelWithFuel;
exports.calculate = calculate;
exports.execute = executeAndPrint();
