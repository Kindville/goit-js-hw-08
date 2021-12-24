
import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-from-state';

const form = document.querySelector('.feedback-form');

const localStorageData = JSON.parse(localStorage.getItem('STORAGE_KEY'));

if (localStorageData) {
    form['email'].value = localStorageData.email;
    form['message'].value = localStorageData.message;
}
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(e) {
    e.preventDefault();

    if (form['email'].value === "" || form['message'].value === "") {
        console.log("There is nothing to submit! Fill up the fields!");
        return;
    };
    if (!form['email'].value || !form['message'].value) {
        console.log('Fill in all the fields');
        return;
    } else {
        console.log({
            email: `${form['email'].value}`,
            message: ` ${form['message'].value}`,
        });
    }

    localStorage.removeItem('STORAGE_KEY');
    e.currentTarget.reset();
};
function onMessageInput(e) {
    localStorage.setItem('STORAGE_KEY',
        JSON.stringify({
        email:` ${ form['email'].value }`,
        message: ` ${form['message'].value} `
    }));
};

// import throttle from 'lodash/throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const feedbackForm = {};

// const refs  = {
//     form: document.querySelector('.feedback-form input'),
//  textareaEl: document.querySelector('.feedback-form textarea')
// };

// refs.form.addEventListener('click', onSumbitClick);
// refs.textareaEl.addEventListener('input', throttle(onTextareaInput, 500));

// populateTextarea()

// function onSumbitClick(e) {
//     e.preventDefault();
//     // e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     console.log(feedbackForm);
// }

// function onTextareaInput() {
//     const {
//         elements: {
//             email,
//             message
//         },
//     } = form;
//     const options = {
//         email: email.value,
//         message: message.value,
//     }
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(options));

// } 
// function populateTextarea() {
//     const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (savedMessage) {
//         console.log(savedMessage);
//         textareaEl.value = savedMessage;

//     }
// }
