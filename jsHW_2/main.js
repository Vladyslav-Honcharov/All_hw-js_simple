// 1.Які існують типи даних у Javascript?
// Число,Рядок,BigInt,Булевий (логічний) тип,Значення «null»,Об'єкти та символи,Значення «undefined»
// 2.У чому різниця між == і ===?
// == це не строга рівність вона може прирівнювати різні типи данних і якщо значення однакові буде true. === строга нерівність і видає true тільки коли і тип і значення співпадають
// 3.Що таке оператор?
// За допомогою оператора ми можемо робити операції з оперантами, виконувати різні математичні дії.Вони є унарні та бінарні. Наприклад =присвоєння, математичні дії+-*/ ><

// let name = prompt("What is your name?");
// let age = prompt("How old are you?");
let name = prompt("What is your name?");
let age = parseFloat(prompt("How old are you?"));
while (name === "" || name === null || isNaN(name) === false) {
  name = prompt("What is your name?");
}
while (age === "" || age === null) {
  age = parseFloat(prompt("How old are you?"));
}
if (age < 18) {
  alert("You are not allowed to visit this website");
} else if (age > 18 && age <= 22) {
  let choice = confirm("Are you sure you want to continue?");
  if (choice == true) {
    alert("Welcome," + name);
  } else {
    alert("You are not allowed to visit this website");
  }
} else if (age >= 23) {
  alert("Welcome," + name);
}
