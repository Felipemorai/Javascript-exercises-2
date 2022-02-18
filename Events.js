const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const items = document.querySelector(".items");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
    console.log("cliked!");

    const nameValue = nameInput.value;
    console.log(nameValue);

    const emailValue = emailInput.value;
    console.log(emailValue);

    if (nameValue === '' || emailValue === '') {
        return alert('Please fill out all the fields!');
    }

    myForm.style.background = "red";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;
});

nameInput.addEventListener('change', function(e) {
    console.log(e.target.value);
});