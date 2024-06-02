const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailValue = email.value;
    const passwordValue = password.value;

    if (emailValue === 'user@example.com' && passwordValue === 'password123') {
        alert('Login berhasil!');
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});

const signUpLink = document.querySelector('.sign up');

signUpLink.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Anda sudah memiliki akun. Silakan login.');
});