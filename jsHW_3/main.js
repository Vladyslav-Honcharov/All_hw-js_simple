// 1.Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.
// Цикли потрібні для скорочення коду. Для повторювання одної частини коду декілька разів. Для більш зручного читання та розуміння коду.
// 2.Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.
// В більшості випадків використовуєтсья цикл for. Якщо потрібно щоб обовящково код виконався 1 раз а вже потім превіряв умову використовується цикл do while. Для більш легких циклів підійде while
// 3.Що таке явне та неявне приведення (перетворення) типів даних у JS?
// Явне перетворення це коли ми змінюємо тип за допомогою спеціальних команд таких як Number() String() Boolean()і тд
// Неявне це коли ми переводимо тип за допомогою операторів + - == * і тд та виразом if (value) {…}

let n = +prompt("Your number?");
let i = 0;
while (Number.isInteger(n) == false) {
  n = +prompt("Your number?");
}
while (i < n && Number.isInteger(n) == true)
  if (n >= 5 && n % 5 == 0) {
    i = i + 5;
    console.log(i);
  } else if (n >= 5 && n % 5 != 0) {
    i = i + 5;
    console.log(i - 5);
  } else if (n < 5) {
    console.log("Sorry, no numbers");
    break;
  } else {
    console.log("Sorry, no numbers");
    break;
  }
