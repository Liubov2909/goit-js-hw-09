const form = document.querySelector(".feedback-form");
const formEmail = form.querySelector("input[name='email']");
const formMessage = form.querySelector("textarea[name='message']");

let obj = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

function setValue({ email, message }) {
    formEmail.value = email || "";
    formMessage.value = message || "";
}

setValue(obj);

form.addEventListener('input', (event) => {
    const element = event.target.name;
    const value = event.target.value;
    obj[element] = value;

    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
});

form.addEventListener('submit', (event) => {
    const emailValue = formEmail.value.trim();
    const messageValue = formMessage.value.trim();

    if (emailValue && messageValue) {
        event.preventDefault();

        localStorage.removeItem("feedback-form-state");
        form.reset();

        console.log(obj);
    } else {
        alert("Заповніть усі поля");
    }
});
