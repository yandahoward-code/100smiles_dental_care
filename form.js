function validateContactForm() {
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (name === "" || email === "" || phone === "") {
    alert("Please complete all required fields.");
    return false;
  }

  alert("Your message has been sent!");
  return true;
}
