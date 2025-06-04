document.getElementById("registrationForm").addEventListener("submit", function (e) {
  const pwd = document.getElementById("password").value;
  const confirmPwd = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("message");

  if (pwd !== confirmPwd) {
    e.preventDefault();
    msg.textContent = "Passwords do not match!";
  } else {
    msg.textContent = "";
    alert("Form submitted successfully!");
  }
});
