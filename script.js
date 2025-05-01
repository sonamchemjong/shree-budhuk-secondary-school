// Custom JavaScript for Shree Budhuk Secondary School

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple static check for demo purposes
    if (username === 'admin' && password === 'admin123') {
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        const errorDiv = document.getElementById('loginError');
        errorDiv.classList.remove('d-none');
    }
});
