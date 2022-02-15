/* False */
const x = '';

console.log(!!x);

if (x) {
    console.log(x);
    /* Vai dar false */
}

const y = 0;

console.log(!!y);

const a = null;
const b = undefined;

console.log(!!a);
console.log(!! b);

/* Truth */
const list = [];
const object = {};

console.log(!![]);
console.log(!!object);

if (list.length > 0) {
    console.log(list);
    /* Vai dar true */
}

!! /* Eles checam o truthy e o falsy de uma variavel */