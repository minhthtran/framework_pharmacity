function togglePassword() {
    var password = document.getElementById("password");
    var eyeIcon = document.querySelector(".fa-eye");
  
    if (password.textContent === "*****") {
      password.textContent = password.dataset.password;
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      password.textContent = "*".repeat(password.dataset.password.length);
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }