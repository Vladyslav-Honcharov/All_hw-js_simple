let main = document.querySelector(".main");
let themeButton = document.querySelector(".btn_theme");
let sinUp = document.querySelector("#singup");
let text = document.querySelectorAll("#text");
let createBtn = document.querySelector("#create");
themeButton.addEventListener("click", (event) => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "dark");
  }
  addDarkTheme();
});
function addDarkTheme() {
  if (localStorage.getItem("theme") === "dark") {
    text.forEach((e) => (e.style.color = "white"));
    themeButton.style.backgroundColor = "white";
    themeButton.style.color = "black";
    main.style.backgroundColor = "#111131";
    sinUp.style.color = "red";
    createBtn.style.backgroundColor = "red";
  } else {
    createBtn.style.backgroundColor = "rgba(60, 184, 120, 0.8)";
    text.forEach((e) => (e.style.color = "black"));
    themeButton.style.backgroundColor = "black";
    themeButton.style.color = "white";
    main.style.backgroundColor = "";
    sinUp.style.color = "";
  }
}
addDarkTheme();
