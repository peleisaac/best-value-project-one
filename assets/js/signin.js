document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("signin-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(form);
    var username = formData.get("username").trim();
    var password = formData.get("password").trim();

    // Check if the username and password are correct
    if (username === "admin" && password === "admin") {
      toastr.success("Signin successful", "Success", { timeOut: 3000 });
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } else if (username === "" && password === "") {
      toastr.error("Username or password cannot be empty", "Error", {
        timeOut: 3000,
      });
    } else {
      toastr.error("Invalid username or password", "Error", { timeOut: 3000 });
    }
  });
});
