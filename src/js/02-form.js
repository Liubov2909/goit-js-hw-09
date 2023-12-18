const feedbackForm = document.querySelector('.feedback-form');
const userEmail = feedbackForm.querySelector('input[type="email"]');
const userMessage = feedbackForm.querySelector('textarea');

userEmail.value = '';
userMessage.value = '';

const userFeedback = {};

const LS_FEEDBACK = 'feedback-form-state';

if (localStorage.getItem(LS_FEEDBACK)) {
    const parsedFeedback = JSON.parse(localStorage.getItem(LS_FEEDBACK));
    
    userFeedback.email = parsedFeedback.email;
    userFeedback.message = parsedFeedback.message;
}

feedbackForm.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        userFeedback.email = event.target.value;
    }

    if (event.target.name === 'message') {
        userFeedback.message = event.target.value;
    }

    const strUserFeedback = JSON.stringify(userFeedback);
    localStorage.setItem(LS_FEEDBACK, strUserFeedback);

    if (userFeedback.email === '' && userFeedback.message === '') {
        localStorage.removeItem(LS_FEEDBACK);
    }
});

feedbackForm.addEventListener('submit', (event) => {
    const formEmail = feedbackForm.querySelector('input[type="email"]');
    const formMessage = feedbackForm.querySelector('textarea');

    if (formEmail.value.trim() && formMessage.value.trim()) {
        event.preventDefault();
        localStorage.removeItem(LS_FEEDBACK);
        userEmail.value = '';
        userMessage.value = '';
        console.log(userFeedback);
    } else {
        alert('Заповніть усі поля');
    }
});
