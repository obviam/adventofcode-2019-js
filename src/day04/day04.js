const inputStart = 271973;
const inputEnd = 785961;

const isValidPassword = (input) => {
    input = '' + input;
    if(input.length != 6) {
        return false;
    }
    let hasDouble = false;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            hasDouble = true;
        }
        if (Number(input[i]) < Number(input[i - 1])) {
            return false;
        }
    }

    return hasDouble;
}

const isValidPasswordV2 = (input) => {
    input = '' + input;
    if(input.length != 6) {
        return false;
    }
    let hasDouble = false;
    for (let i = 0; i < input.length - 3; i++) {
        if (input[i] === input[i + 1] && 
            input[i] !== input[i - 1] && 
            input[i] !== input[i + 2]) {
            hasDouble = true;
        }
        if ((Number(input[i]) < Number(input[i - 1])) || (Number(input[i] > Number(input[i + 1])))) {
            return false;
        }
    }
    
    if (input[input.length - 3] > input[input.length - 2] || input[input.length - 2] > input[input.length - 1]) {
        return false;
    }

    if (!hasDouble) {
        if (input[input.length - 3] < input[input.length - 2]) {
            if (input[input.length - 2] === input[input.length - 1]) {
                return true;
            }
        }
    }

    return hasDouble;
}

const findValidPasswords = (inputStart, inputEnd) => {
    const passwords = [];
    for (let i = inputStart; i <= inputEnd; i++) {
        if (isValidPassword(i)) {
            passwords.push(i);
        }
    }
    return passwords.length;
}

const findValidPasswordsV2 = (inputStart, inputEnd) => {
    const passwords = [];
    for (let i = inputStart; i <= inputEnd; i++) {
        if (isValidPasswordV2(i)) {
            passwords.push(i);
        }
    }
    // console.table(passwords);
    return passwords.length;
}

const executeAndPrint = () => {
    console.log('*'.repeat(60));
    console.log('* > Day 4 <');
    console.log('*'.repeat(60));
    const star1 = findValidPasswords(inputStart, inputEnd);
    const star2 = findValidPasswordsV2(inputStart, inputEnd);
    console.log('* Result star/day 1/04: ' + star1);
    console.log('* Result star/day 2/04: ' + star2);
    console.log('*'.repeat(60));
  }
  
executeAndPrint();

exports.isValidPassword = isValidPassword;
exports.isValidPasswordV2 = isValidPasswordV2;
exports.findValidPasswords = findValidPasswords;