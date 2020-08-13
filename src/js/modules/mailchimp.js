const form = document.getElementById('newsletter');

const submitEmail = (email) => {
  fetch('/.netlify/functions/form-handler', {
    method: 'post',
    body: JSON.stringify({
      email,
    }),
  }).then((response) => {
    response.json();
    console.log('response', response);
  }).then((data) => {
    console.log(data);
    const messageDiv = document.getElementById('message');

    if (data.emailAdded) {
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
