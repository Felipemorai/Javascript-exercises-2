/* Method Map() */
const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedByToo = numbers.map(function(number) {
    return number * 2
});

console.log(numbersMultipliedByToo);

/* Method Filter */
const ages = [8, 13, 27, 30, 22, 7, 40];

const evenAges = ages.filter(function(age) {
    return age % 2 === 0;
});

console.log(evenAges);