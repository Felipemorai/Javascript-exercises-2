const all = [
    {
        id: 1,
        description: 'Study programmation',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Read',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Train',
        isCompleted: true,
    },
];

const allJSON = JSON.stringify(all);
const allList = JSON.parse(allJSON);

console.log(allJSON);
console.log(allList);