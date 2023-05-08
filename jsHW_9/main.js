let firstArr = [
  "hello",
  "world",
  "Kiev",
  "Kharkiv",
  "Odessa",
  "Lviv",
  "1",
  "2",
  23,
];

const secondArr = document.createElement("div");
document.body.append(secondArr);

function addList(array, parent) {
  if (parent == undefined) {
    ul = document.createElement("ul");
    document.body.append(ul);

    array.forEach((element) => {
      li = document.createElement("li");
      ul.insertAdjacentHTML("beforebegin", `<li>${element}</li>`);
    });
  } else {
    array.forEach((element) => {
      li = document.createElement("li");

      parent.insertAdjacentHTML("afterbegin", `<li>${element}</li>`);
    });
  }
}

addList(firstArr, secondArr);
