/* Functions */
function sum(a, b) {
    console.log(a, b);
    return a + b;
};

const sumValue = sum(2, 10);

console.log(sumValue);

/* Arrow functions */
const sumArrow = (c, d) => {
    console.log(c, d);
    return c + d;
};

const arrowValue = sumArrow(4, 6);

console.log(arrowValue);