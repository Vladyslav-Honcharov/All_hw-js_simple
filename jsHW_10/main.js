let tabs = document.getElementsByClassName("tabs");

let liTabs = document.getElementsByClassName("tabs-title");
let text = document.getElementsByClassName("text");
let tabsContent = document.getElementsByClassName("tabs-content");
for (let i = 0; i < liTabs.length; i++) {
  liTabs[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}

// for (let i = 0; i < text.length; i++) {
//   liTabs[i].addEventListener("click", function () {
//     text[i].classList.toggle("active_text");
//   });
// }
// function (e) {
//   text[i].classList.toggle("active_text");
// };

for (let i = 0; i < text.length; i++) {
  liTabs[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active_text");
    current[0].className = current[0].className.replace(" active_text", "");

    text[i].className += " active_text";
  });
}
