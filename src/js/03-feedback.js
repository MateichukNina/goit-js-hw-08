
 import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
 const emailInput = form.querySelector('input[name="email"]');
 const messageInput = form.querySelector('textarea[name="message"]');





 emailInput.addEventListener('input', throttle(updateStorage, 500));
 messageInput.addEventListener('input',throttle(updateStorage, 500));
 form.addEventListener('submit', submitForm);


function updateStorage() {
   const formInfo = {
     email: emailInput.value,
    message: messageInput.value,
  };

   localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
 }
 loadFormState();

 function loadFormState() {
   const storedState = localStorage.getItem('feedback-form-state');

   if (storedState) {
     const state = JSON.parse(storedState);
   emailInput.value = state.email;
    messageInput.value = state.message;
   }
 }


 function submitForm(event) {
   event.preventDefault();

  const formInfo = {
     email: emailInput.value,
     message: messageInput.value,
   };

   console.log('form submitted:', formInfo);

   emailInput.value = '';
   messageInput.value = '';

   
   localStorage.removeItem('feedback-form-state');
}

 