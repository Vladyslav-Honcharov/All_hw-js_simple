// 1.Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
// setTimeout може викликати функцію один раз через указаний час, а setInterval може виконувати функцію регулярно з указаним інтервалом часу
// 2.Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
// Функція спрацює одразу після завантаження коду.Тому що затримку в часі ми цим забираємо.
// 3.Для того щоб setInterval викорнується постійно і без зупинки, він буде впливати на код далі тому його і відключа.ть в необхідний момент.

const img = document.getElementsByTagName("img");

let showImg = 0;
let animationWork = false;

function interval() {
  img[showImg].className = "image-to-show";
  if ((showImg = (showImg + 1) % img.length));
  img[showImg].classList.add("show");
}
let animationShow = setInterval(interval, 3000, (animationWork = true));

const run = document.querySelector(".btn_run");
run.addEventListener("click", go);

function go() {
  animationShow = setInterval(interval, 3000, (animationWork = true));
}
const animationStop = document.querySelector(".btn_stop");
animationStop.addEventListener("click", pause);
function pause() {
  animationWork = false;
  clearInterval(animationShow);
}
