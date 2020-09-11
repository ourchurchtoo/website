const form = document.getElementById('newsletter');
const messageDiv = document.getElementById('message');

const submitEmail = (email) => {
  fetch('/.netlify/functions/form-handler', {
    method: 'post',
    body: JSON.stringify({
      email,
    }),
  }).then((response) => response.json()).then((data) => {
    if (data.emailAdded) {
      messageDiv.innerText = 'Confirmation email has been sent!';
    } else {
      messageDiv.innerText = 'Something went wrong :(';
    }
  }).catch(() => {
    messageDiv.innerText = 'Something went wrong! It\'s possible you\'ve already signed up.';
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('inputEmail').value;
  submitEmail(email);
});
