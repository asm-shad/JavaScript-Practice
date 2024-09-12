
function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return 'Invalid Input';
    }

    const digits = '0123456789';

    for (let char of input) {
        if (digits.includes(char)) {
            return true;
        }
    }

    return false;
}

console.log(checkDigitsInName('Raj123')); 
console.log(checkDigitsInName('nayeem')); 