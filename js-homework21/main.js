const drawCircleBtn = document.querySelector("#drawCircleBtn");
const body = document.querySelector("body");

drawCircleBtn.addEventListener("click", () => {
  body.removeChild(drawCircleBtn);

  const container = document.createElement("div");
  body.appendChild(container);

  const diameterInput = document.createElement("input");
  diameterInput.setAttribute("type", "number");
  diameterInput.setAttribute("placeholder", "Ведіть діаметр кола");
  container.appendChild(diameterInput);

  const drawBtn = document.createElement("button");
  drawBtn.textContent = "Намалювати";
  container.appendChild(drawBtn);

  drawBtn.addEventListener("click", () => {
    const diameter = parseInt(diameterInput.value);

    container.removeChild(diameterInput);
    container.removeChild(drawBtn);

    for (let i = 0; i < 100; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.backgroundColor = getRandomColor();
      container.appendChild(circle);

      circle.addEventListener("click", () => {
        container.removeChild(circle);
      });
    }
  });
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
