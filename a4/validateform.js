function validateForm() {
  let valid = true;

  // Clear all previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Get field values
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zip = document.getElementById("zip").value.trim();

  // Email validation
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  if (at < 1 || dot < at + 2 || dot + 2 >= email.length) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Phone: only digits, max 15
  if (!/^\d{1,15}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be up to 15 digits.";
    valid = false;
  }

  // Username: max 12 characters
  if (username.length > 12) {
    document.getElementById("usernameError").textContent = "Max 12 characters allowed.";
    valid = false;
  }

  // Password: max 7 characters
  if (password.length > 7) {
    document.getElementById("passwordError").textContent = "Max 7 characters allowed.";
    valid = false;
  }

  // Address: required
  if (address === "") {
    document.getElementById("addressError").textContent = "Address is required.";
    valid = false;
  }

  // City: required
  if (city === "") {
    document.getElementById("cityError").textContent = "City is required.";
    valid = false;
  }

  // State: must be selected
  if (state === "") {
    document.getElementById("stateError").textContent = "Please select a state.";
    valid = false;
  }

  // Country: must be selected
  if (country === "") {
    document.getElementById("countryError").textContent = "Please select a country.";
    valid = false;
  }

  // Zip Code: only if country is USA
  if (country === "USA") {
    if (!/^\d{5}$/.test(zip)) {
      document.getElementById("zipError").textContent = "Enter a 5-digit ZIP code.";
      valid = false;
    }
  }

  return valid;
}
