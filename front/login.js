document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Simple demo validation
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const messageDiv = document.getElementById('loginMessage');

  if (email === "user@example.com" && password === "password123") {
    messageDiv.textContent = "Login successful!";
    messageDiv.classList.remove("text-red-600");
    messageDiv.classList.add("text-green-600");
    // Redirect or further logic here
  } else {
    messageDiv.textContent = "Invalid email or password.";
    messageDiv.classList.remove("text-green-600");
    messageDiv.classList.add("text-red-600");
  }
});