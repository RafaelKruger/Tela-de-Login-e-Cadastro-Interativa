var btnLogin = document.querySelector("#login");
var btnRegister = document.querySelector("#register");

var body = document.querySelector("body");

btnLogin.addEventListener("click", function () {
  body.className = "login-js";
});

btnRegister.addEventListener("click", function () {
  body.className = "register-js";
});
