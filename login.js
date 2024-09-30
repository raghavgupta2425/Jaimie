document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Get email and password values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (validateEmail(email) && password.length >= 6) {
    // Simulate successful login with a custom message
    document.getElementById('message').textContent = `Welcome back, ${email}! You are now logged in.`;
    document.getElementById('message').style.color = 'green';
  } else {
    // Show an error message
    document.getElementById('message').textContent = 'Invalid login details. Please try again.';
    document.getElementById('message').style.color = 'red';
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Make the login button interactive
document.getElementById('email').addEventListener('input', function() {
  const email = document.getElementById('email').value;
  const button = document.querySelector('button');

  if (validateEmail(email)) {
    button.style.backgroundColor = '#4CAF50'; // Success green
  } else {
    button.style.backgroundColor = '#63372C'; // Default chocolate color
  }
});