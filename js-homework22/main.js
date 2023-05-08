// const container = document.querySelector(".container");
// const body = document.querySelector("body");
// for (let i = 0; i < 900; i++) {
//   const blocks = document.createElement("div");

//   blocks.classList.add("block");

//   container.appendChild(blocks);
// }
// const blocks = document.querySelectorAll(".block");

// container.addEventListener("click", function (event) {
//   block = event.target;
//   block.classList.toggle("black");
// });

// body.addEventListener("clcik", (e) => {
//   if (!container.contains(event.target)) {
//     block.forEach((element) => {
//       element.classList.toggle("black");
//     });
//   }
// });

// Створення таблиці
let table = document.createElement("table");
for (let i = 0; i < 30; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 30; j++) {
    let cell = document.createElement("td");
    row.appendChild(cell);
  }
  table.appendChild(row);
}

// Додавання таблиці до сторінки
document.body.appendChild(table);

// Обробник подій click на таблиці
table.addEventListener("click", function (event) {
  let cell = event.target;
  if (cell.tagName.toLowerCase() === "td") {
    cell.classList.toggle("black");
  }
});
let td = document.querySelectorAll("td");
let tr = document.querySelectorAll("tr");
// Обробник подій click на body
document.body.addEventListener("click", function (event) {
  if (!table.contains(event.target)) {
    table.classList.toggle("black");
  }
});
