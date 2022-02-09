const person = {
    firstName: 'Don',
    lastName: 'Corleone',
    age: '23',
    job: 'Gangsta',
    hobbies: ['To watch football', 'To play football', 'Heist'],
    dog: {
        name: 'Twig',
        age: 4
    }
};

/* const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const job = person.job;
 */
const heist = person.hobbies[2];

/* Destructing */
const { firstName: primeiroNome, lastName, age, job, hobbies, dog: { name }, } = person;

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(job);
console.log(heist);

/* person.dog = 'Twig'; */

console.log(person.dog.name);
console.log(name);