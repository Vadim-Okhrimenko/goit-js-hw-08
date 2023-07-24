import throttle from 'lodash.throttle';

const ref = {
  form: document.querySelector('.feedback-form'),
};

ref.form.addEventListener('input', throttle(handleDataInput, 500));
ref.form.addEventListener('submit', handleSubmitOutput);

let feedbackFormState = localStorage.getItem('feedback-form-state');
feedbackFormState = feedbackFormState === null ? {} : JSON.parse(feedbackFormState);

const { email: feedbackEmail = '', message: feedbackMessage = '' } = feedbackFormState;
ref.form.elements.email.value = feedbackEmail;
ref.form.elements.message.value = feedbackMessage;

function handleDataInput(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}

function handleSubmitOutput(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value, message: message.value });
  e.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
}