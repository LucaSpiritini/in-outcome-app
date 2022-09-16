window.addEventListener("load", function (e) {

  let form = document.querySelector(".loginForm");

  let email = document.querySelector("#email");
  let textDangerEmail = document.querySelector("#dangerEmail");

  let password = document.querySelector("#password");
  let textDangerPassword = document.querySelector("#dangerPassword");

  form.addEventListener("submit", function (e) {
    let er = [];

    if (!email.value) {
      er.push("Email should be completed");
      textDangerEmail.innerHTML = "<p>" + "Complete email field" + "</p>";
    } else textDangerEmail.style.display = "none";

    if (!password.value) {
      er.push("Password should be completed");
      textDangerPassword.innerHTML = "<p>" + "Complete password field" + "</p>";
    } else textDangerPassword.style.display = "none";

    if (er.length > 0) {
      console.log(er);
      e.preventDefault();
    }
  });
});
