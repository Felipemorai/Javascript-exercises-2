const addUserText = document.getElementById('add-user');

addUserText.innerText = "Adicionar usuário";

console.log(addUserText);

const submitButtonText = document.querySelector('#submit-button');

submitButtonText.value = "Criar";

console.log(submitButtonText);

const item = document.querySelector(".item");

console.log(item);

/* Select multiple elements */
const allItems = document.querySelectorAll(".item");

console.log(allItems);
console.log(allItems[1]); /* Select item of the middle */

/* getElementsByClassName isn't good, you can't to do methods */
const allItem = document.getElementsByClassName("item");

console.log(allItem);

/* getElementsByTagName */
const allItemss = document.getElementsByTagName("li");

console.log(allItemss);