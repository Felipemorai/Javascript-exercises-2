const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);
    console.log("cliked!");

    const nameValue = nameInput.value;
    console.log(nameValue);

    const emailValue = emailInput.value;
    console.log(emailValue);
});