const form = document.getElementById('newsletter');

const submitEmail = (email) => {
  fetch('/.netlify/functions/form-handler', {
    method: 'post',
    body: JSON.stringify({
      email,
    }),
  }).then((response) => {
    console.log('response', response);
    console.log('response body', response.body);

    const messageDiv = document.getElementById('message');

    if (response.status === 200) {
      messageDiv.innerText = 'Confirmation email has been sent!';
    } else {
      messageDiv.innerText = 'Something went wrong :(';
    }
  });
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('inputEmail').value;
  submitEmail(email);
});
