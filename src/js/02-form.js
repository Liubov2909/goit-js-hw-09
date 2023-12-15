const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector("input");
const formMessage = form.querySelector("textarea");


let obj = JSON.parse(localStorage.getItem("feedback-form-state"));

function setValue({ email, message }) {
    formEmail.value = email;
    formMessage.value = message;
}

!obj ? obj = {} : setValue(obj);


form.addEventListener('input', (event) => {
    const element = event.target.name;
    const value = event.target.value;
    obj[element] = value;

    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
});

form.addEventListener('submit', (event) => {
    if (formEmail.value && formMessage.value) {
        event.preventDefault();

        localStorage.removeItem("feedback-form-state");
        formEmail.value = '';
        formMessage.value = '';

        console.log(obj);
    } else {
        alert("Заповніть усі поля");
    }
});