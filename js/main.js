// Function #1: Toggle navbar accent (simple UI interaction)
function toggleAccent() {
  const nav = document.querySelector(".navbar");
  if (!nav) return;
  nav.classList.toggle("bg-dark");
  nav.classList.toggle("navbar-dark");
  nav.classList.toggle("navbar-light");
}

// Function #2: Basic contact form validation
function validateContactForm(event) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const alertBox = document.getElementById("formAlert");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    event.preventDefault();
    alertBox.classList.remove("d-none");
    alertBox.textContent = "Please fill in all fields before submitting.";
    return false;
  }

  alertBox.classList.remove("d-none");
  alertBox.classList.add("alert-success");
  alertBox.textContent = "Form looks good. (Demo submit only)";
  return true;
}
