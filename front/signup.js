document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirm = document.getElementById('signup-confirm').value.trim();
  const messageDiv = document.getElementById('signupMessage');

  if (!name || !email || !password || !confirm) {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.classList.remove("text-green-600");
    messageDiv.classList.add("text-red-600");
    return;
  }

  if (password !== confirm) {
    messageDiv.textContent = "Passwords do not match.";
    messageDiv.classList.remove("text-green-600");
    messageDiv.classList.add("text-red-600");
    return;
  }

  // Demo: pretend registration is successful
  messageDiv.textContent = "Sign up successful! You can now log in.";
  messageDiv.classList.remove("text-red-600");
  messageDiv.classList.add("text-green-600");
  // You can redirect or clear the form here if desired
});