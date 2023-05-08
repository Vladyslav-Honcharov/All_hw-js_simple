const priceInput = document.getElementById("input");
const priceMessage = document.getElementById("message");

function addGreenBorder() {
  priceInput.style.borderColor = "green";
  priceMessage.innerHTML = "";
}

function addRedBorder() {
  priceInput.style.borderColor = "red";
  priceMessage.innerHTML = "Ведіть коректну ціну";
}

function addPriceMessage() {
  const price = priceInput.value;

  const span = document.createElement("span");
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "X";

  span.innerHTML = `Поточна ціна: ${price}`;

  span.appendChild(closeButton);
  priceMessage.appendChild(span);

  closeButton.addEventListener("click", () => {
    priceMessage.removeChild(span);

    priceInput.value = "";
    addGreenBorder();
  });
}

priceInput.addEventListener("focus", addGreenBorder);
priceInput.addEventListener("blur", () => {
  const price = priceInput.value;

  if (price < 0 || isNaN(price)) {
    addRedBorder();
  } else {
    addPriceMessage();
  }
});
