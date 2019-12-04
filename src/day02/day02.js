const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,9,19,23,1,23,5,27,2,27,10,31,1,6,31,35,1,6,35,39,2,9,39,43,1,6,43,47,1,47,5,51,1,51,13,55,1,55,13,59,1,59,5,63,2,63,6,67,1,5,67,71,1,71,13,75,1,10,75,79,2,79,6,83,2,9,83,87,1,5,87,91,1,91,5,95,2,9,95,99,1,6,99,103,1,9,103,107,2,9,107,111,1,111,6,115,2,9,115,119,1,119,6,123,1,123,9,127,2,127,13,131,1,131,9,135,1,10,135,139,2,139,10,143,1,143,5,147,2,147,6,151,1,151,5,155,1,2,155,159,1,6,159,0,99,2,0,14,0];

const compute = (input) => {
    const code = Array.from(input);
    for(let i = 0; i < code.length; i+=4) {
        var opcode = code[i];
        if (opcode === 99) {
            return [...code];
        }
        const pos1 = code[i+1];
        const pos2 = code[i+2];
        const pos3 = code[i+3];

        const val1 = code[pos1];
        const val2 = code[pos2];
        if (opcode === 1) {
            code[pos3] = val1 + val2;
        } else if (opcode === 2) {
            code[pos3] = val1 * val2;
        }
    }
}

const executeAndPrint = () => {
    console.log('*'.repeat(60));
    console.log('* > Day 2 <');
    console.log('*'.repeat(60));
    // preflight
    input[1] = 12;
    input[2] = 2;
    const star1 = compute(input);
    console.log('* Result star/day 1/02: ' + star1[0]);
    console.log('*'.repeat(60));
}

exports.compute = compute;

executeAndPrint();