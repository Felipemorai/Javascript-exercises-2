/* Conditionals If and Else */
const sum = 2 + 2;

if (sum === 2) {
    console.log('Sum is 2!');
} else if (sum ===3) {
    console.log('Sum is 3!');
}
else {
    console.log('Sum isn´t 2!');
}

/* Operators And(&&) and Or(||) */
const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
    console.log('sum1 is 4 and sum2 is 6!');
} else {
    console.log('sum1 isn´t 4 and sum2 isn´t 6!');
}

if (sum1 === 4 || sum2 === 6) {
    console.log('sum1 is 4 or sum2 is 6!');
} else {
    console.log('sum1 isn´t 4 or sum2 isn´t 6');
}

/* Ternary Operator */
let number = sum === ;

if (sum === 2) {
    number = 2;
} else {
    number = 4;
}

console.log(number);