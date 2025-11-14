const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');
const loginButton = document.getElementById('login-button');

if (loginButton) {
  loginButton.addEventListener('click', () => {
    const user = usernameEl ? usernameEl.value.trim() : '';
    const pass = passwordEl ? passwordEl.value : '';

    // Demo credentials; change these to your real check
    const valid = (user === 'Dallin' && pass === 'Password');

    if (valid) {
      window.location.href = 'page1.html';
    } else {
      alert('Invalid username or password');
    }
  });
}