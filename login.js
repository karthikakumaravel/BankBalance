document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;
    if (email === 'karthika@gmail.com' && password === 'karthika') {
        window.location.href = 'calc.html';
    }
    else {
        alert('Incorrect email or password!');
    }
})