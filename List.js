const names = ['Apollo', 'Arthemis', 'Kiara', 'Peter'];

const arthemis = names[1];

console.log(arthemis);

names.push(false);/* Add in the end */
names.unshift('Frank');/* Add  */
names.pop()/* Cut the last */

names[4] = 'Fresno';

const indexOfKiara = names.indexOf('Kiara');

const sortedNames = names.sort();

console.log(names.length);
console.log(sortedNames);