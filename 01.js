document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation (example: username and password should not be empty)
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Username and Password are required.';
        return;
    }

    // Simulated authentication (replace this with actual authentication logic)
    if (username === 'sumit' && password === '123456') {
        alert('Sign in successful!');
        errorMessage.textContent = '';
        // Redirect to another page or perform other actions upon successful sign in
    } 
    else {
        errorMessage.textContent = 'Invalid Username or Password.';
    }
});
