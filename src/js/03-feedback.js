
import throttle from 'lodash/throttle';
const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = {};

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onSumbitClick);
textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onSumbitClick(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(feedbackForm);
}

function onTextareaInput(e) {
    const message = e.target.value;
    console.log(message);
    feedbackForm[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        textareaEl.value = savedMessage;

    }
}
