function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Add your own validation logic here
    if (username === "admin" && password === "password") {
      return true;
    } else {
      AudioListener("log-in successful");
      return true;
    }
  }
  