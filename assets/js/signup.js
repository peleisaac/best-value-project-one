document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("signup-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(form);
    var fullname = formData.get("fullname").trim();
    var email = formData.get("email").trim();
    var password = formData.get("password").trim();
    var confirmPassword = formData.get("confirmPassword").trim();

    // Email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password strength regex (at least 8 characters, one letter, one number)
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    var errors = [];

    // Fullname validation
    if (fullname === "") {
      errors.push("Full name is required.");
    }

    // Email validation
    if (email === "") {
      errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
      errors.push("Please provide a valid email address.");
    }

    // Password validation
    if (password === "") {
      errors.push("Password is required.");
    } else if (!passwordRegex.test(password)) {
      errors.push(
        "Password must be at least 8 characters long and include at least one letter and one number."
      );
    }

    // Confirm password validation
    if (confirmPassword === "") {
      errors.push("Confirm Password is required.");
    } else if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    // Show errors or proceed
    if (errors.length > 0) {
      toastr.error(errors.join("<br>"), "Error", {
        timeOut: 5000,
        escapeHtml: false,
      });
    } else {
      toastr.success("Signup successful", "Success", { timeOut: 3000 });
      window.location.href = "index.html";
    }
  });
});
