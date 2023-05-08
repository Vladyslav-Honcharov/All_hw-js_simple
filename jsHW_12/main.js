// 1.Чому для роботи з input не рекомендується використовувати клавіатуру?
// Тому що коли користувач використовує input він вводить символи з клавіатури і це може непередбачувано впливати на інші події клавіатури, або подій клавіатури на самому input.input

const btn = document.querySelectorAll(".btn");

document.addEventListener("keyup", (e) => {
  btn.forEach((button) => {
    if (
      e.key === button.textContent ||
      e.key === button.textContent.toLowerCase()
    ) {
      button.classList.add("focus");
    }
  });
});
document.addEventListener("keydown", (e) => {
  btn.forEach((button) => {
    if (
      e.key !== button.textContent ||
      e.key !== button.textContent.toLowerCase()
    ) {
      button.classList.remove("focus");
    }
  });
});

// document.addEventListener("keyup", (e) => {
//   btn.forEach((button) => {
//     if (
//       e.key !== button.textContent ||
//       e.key !== button.textContent.toLowerCase()
//     ) {
//       button.classList.remove("focus");
//     }
//   });
// });

// document.addEventListener("keydown", function (event) {
//   if (event.code == "Enter") {
//     btn[0].classList.add("focus");
//   }
//   if (event.code == "KeyS") {
//     btn[1].classList.add("focus");
//   }
//   if (event.code == "KeyE") {
//     btn[2].classList.add("focus");
//   }
//   if (event.code == "KeyO") {
//     btn[3].classList.add("focus");
//   }
//   if (event.code == "KeyN") {
//     btn[4].classList.add("focus");
//   }
//   if (event.code == "KeyL") {
//     btn[5].classList.add("focus");
//   }
//   if (event.code == "KeyZ") {
//     btn[6].classList.add("focus");
//   }
// });
// document.addEventListener("keyup", function (event) {
//   if (event.code !== "Enter") {
//     btn[0].classList.remove("focus");
//   }
//   if (event.code !== "KeyS") {
//     btn[1].classList.remove("focus");
//   }
//   if (event.code !== "KeyE") {
//     btn[2].classList.remove("focus");
//   }
//   if (event.code !== "KeyO") {
//     btn[3].classList.remove("focus");
//   }
//   if (event.code !== "KeyN") {
//     btn[4].classList.remove("focus");
//   }
//   if (event.code !== "KeyL") {
//     btn[5].classList.remove("focus");
//   }
//   if (event.code !== "KeyZ") {
//     btn[6].classList.remove("focus");
//   }
// });
