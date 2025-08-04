// script.js

// CUSTOM FORM VALIDATION
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Basic custom validation rules
  if (username === "" || email === "" || password === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// INTERACTIVE FEATURE 1: TOGGLE TEXT DISPLAY
document.getElementById("toggleBtn").addEventListener("click", function () {
  const text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});

// INTERACTIVE FEATURE 2: BUTTON CLICK COUNTER
let count = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = count;
});
