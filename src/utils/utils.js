var fs = require('fs');
var path = require('path');

const readFile = (relativePath) => {
    const location = path.join(__dirname, '..', relativePath);
    console.log(location);
    return fs.readFileSync(location).toString().split('\n');
}

exports.readInput = readFile;