
const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // unikaj przeladowania strony

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Wszystkie pola powinny być wypełnione!');
    return;
  }

  const loginData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(loginData);

  loginForm.reset();
});