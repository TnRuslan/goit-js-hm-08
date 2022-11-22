import throttle from 'lodash.throttle';

const feadbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const userFeedback = {
  email: '',
  message: '',
};
saveUserMassage();
feadbackForm.addEventListener('input', throttle(onFormInputValue, 250));
feadbackForm.addEventListener('submit', onFormSubmit);

function onFormInputValue(event) {
  userFeedback[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(userFeedback));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  console.log(userFeedback);

  localStorage.removeItem(STORAGE_KEY);
}

function saveUserMassage() {
  const savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMassage) {
    userFeedback.email = savedMassage.email;
    userFeedback.message = savedMassage.message;
    feadbackForm.elements.email.value = savedMassage.email;
    feadbackForm.elements.message.value = savedMassage.message;
  }
}
