const form = document.getElementById('newsletter');

const submitEmail = (email) => {
  fetch('/.netlify/functions/form-handler', {
    method: 'post',
    body: JSON.stringify({
      email,
    }),
  }).then((response) => response.json()).then((data) => {
    console.log(data);
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = 'Confirmation email has been sent!';
  });
};


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('inputEmail').value;
  submitEmail(email);
});
