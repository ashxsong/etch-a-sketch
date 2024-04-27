const container = document.querySelector("#container");
let square;

for (let i = 0; i < 16 * 16; i++) {
  square = document.createElement("div");
  square.classList.add("square");
  square.style.height = "45px";
  square.style.width = "45px";
  container.appendChild(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mousemove", function (e) {
    e.target.style.background = "black";
  });
});

const body = document.querySelector("body");
const button = document.createElement("button");

button.textContent = "New Grid";
button.style.cssText = "background-color: white; padding: 8px 18px; border-style: solid; border-width: 1px; border-color: black; color: black;"
button.addEventListener("click", () => {
  let numSquares = prompt("How many squares per side for the new grid?");
  while (!Number.isInteger(Number(numSquares)) || numSquares < 1 || numSquares > 100) {
    numSquares = prompt("Please enter a number between 1 and 100:");
  }
  let squareDim = (752 - 2 * numSquares) / numSquares;
  let squarePixels = String(squareDim) + "px";
});

body.insertBefore(button, container);