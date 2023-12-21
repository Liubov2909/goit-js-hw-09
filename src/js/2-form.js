const feedbackForm = document.querySelector('.feedback-form');
const userEmail = feedbackForm.querySelector('input[type="email"]');
const userMessage = feedbackForm.querySelector('textarea');

const LS_FEEDBACK = 'feedback-form-state';

// Функція для отримання даних з локального сховища
function getFromStorage() {
    const storedData = localStorage.getItem(LS_FEEDBACK);
    return storedData ? JSON.parse(storedData) : {};
}

// Прослуховування події "input" для відстеження введення
feedbackForm.addEventListener('input', (event) => {
    // Спочатку отримуємо поточні дані з локального сховища
    const userFeedback = getFromStorage();

    // Оновлюємо об'єкт userFeedback залежно від події "input"
    if (event.target.name === 'email') {
        userFeedback.email = event.target.value.trim();
    }

    if (event.target.name === 'message') {
        userFeedback.message = event.target.value.trim();
    }

    // Зберігаємо оновлені дані у локальному сховищі
    localStorage.setItem(LS_FEEDBACK, JSON.stringify(userFeedback));
});

// Прослуховування події "submit" для обробки відправки форми
feedbackForm.addEventListener('submit', (event) => {
    // Забираємо дані з локального сховища
    const parsedFeedback = getFromStorage();

    // Використовуємо дані форми або дані з локального сховища для виводу
    const obj = {
        email: userEmail.value.trim(),
        message: userMessage.value.trim(),
    };

    if (obj.email && obj.message) {
        event.preventDefault();
        // Очищуємо локальне сховище
        localStorage.removeItem(LS_FEEDBACK);
        // Очищуємо поля форми
        userEmail.value = '';
        userMessage.value = '';

        console.log('object:', obj);
    } else {
        alert('Please fill in all fields');
    }
});

// Прослуховування події "load" для встановлення даних з локального сховища при завантаженні сторінки
window.addEventListener('load', (event) => {
    // Отримуємо дані з локального сховища при завантаженні сторінки
    const parsedFeedback = getFromStorage();

    // Встановлюємо значення полів форми на основі отриманих даних
    if (parsedFeedback.hasOwnProperty('email')) {
        userEmail.value = parsedFeedback.email;
    }

    if (parsedFeedback.hasOwnProperty('message')) {
        userMessage.value = parsedFeedback.message;
    }    
});
