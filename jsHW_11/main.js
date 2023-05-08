const password = document.querySelector(".password");
const passwordCheck = document.querySelector(".password_check");
const btn = document.querySelector(".btn");
const errorPassword = document.querySelector(".errorPassword");
const eyes = document.querySelectorAll(".fas");
const input = document.querySelector(".input");

btn.onclick = function (event) {
  event.preventDefault();
  if (password.value == passwordCheck.value) {
    alert("You are welcome");
    errorPassword.style.display = "none";
  } else {
    errorPassword.style.display = "block";
  }
};

// function showPasswordFirst() {
//   inputFirst.type = "text";
//   eyes.classList.toggle = "eyes_hide";
// }
// function showPasswordSecond() {
//   inputSecond.type = "text";
//   eyes.classList.toggle = "eyes_hide";
// }
eyes[1].classList.remove("fa-eye-slash");
eyes[3].classList.remove("fa-eye-slash");
for (let index = 0; index < eyes.length; index++) {
  eyes[index].addEventListener("click", function showEyes(e) {
    // e.target.classList.toggle("eyes_hide");
    if (e.target.classList.contains("fa-eye-slash")) {
      input.setAttribute("type", "password");
      e.target.classList.remove("fa-eye-slash");
    } else {
      input.setAttribute("type", "text");
      e.target.classList.toggle("fa-eye-slash");
    }
  });
}
