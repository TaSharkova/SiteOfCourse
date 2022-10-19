const loginButton = document.querySelector(".login");
const loginPopup = document.querySelector(".login-popup");

function showPopup(evt) {
  evt.preventDefault();
  loginPopup.classList.toggle("show-popup");
}

loginButton.addEventListener("click", showPopup);