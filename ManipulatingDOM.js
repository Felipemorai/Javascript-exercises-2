/* Manipulate */
const items = document.querySelector('.items');
const button = document.querySelector('.btn');

/* items.remove(); Remove everything*/

items.firstElementChild.remove();

items.lastElementChild.remove();

/* items.remove([1]); */

items.children[0].textContent = 'Item One';

/* Styling button */
button.style.background = "red";