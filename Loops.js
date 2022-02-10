/* For Loop */
for (let index = 0; index <= 10; index++) {
    console.log(index);
}; 

const carsBrand = ['ferrari', 'Tesla', 'Ford', 'Mercedes'];

for (let i = 0; i < carsBrand.length; i++) {
    console.log(carsBrand[i]);
};

/* For Of Loop */
for (let car of carsBrand) {
    console.log(car);
};

carsBrand.forEach(function(car, index) {
    console.log(index, car);
});

/* While Loop */
let index = 0;

while (index < 10) {
    console.log('index it´s smaller than 10');
    index++;
}

/* For In Loop */
const person = {
    name: 'Jane',
    age: 21,
};

for (property in person) {
    console.log(person[property]);
};