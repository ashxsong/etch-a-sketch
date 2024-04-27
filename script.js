let container = document.querySelector("#container");
let squares = Array();
let square;

const body = document.querySelector("body");
const button = document.createElement("button");

newGrid(16);

function newGrid(numSquares) {
  container = document.querySelector("#container");
  squares = document.querySelectorAll(".square");
  let squareDim = (752 - 2 * numSquares) / numSquares;
  let squarePixels = String(squareDim) + "px";
  if (squares.length !== 0) {
    for (square of squares) {
      container.removeChild(square);
    }
  }
  for (let i = 0; i < numSquares * numSquares; i++) {
    square = document.createElement("div");
    square.classList.add("square");
    square.style.height = squarePixels;
    square.style.width = squarePixels;
    container.appendChild(square);
  }
  squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mousemove", function (e) {
      redNumber = Math.floor(Math.random() * 256);
      greenNumber = Math.floor(Math.random() * 256);
      blueNumber = Math.floor(Math.random() * 256);
      e.target.style.background = `rgb(${redNumber}, ${greenNumber}, ${blueNumber})`;
      e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
    });
  });
}

button.textContent = "New Grid";
button.style.cssText = "background-color: white; padding: 8px 18px; border-style: solid; border-width: 1px; border-color: black; color: black;"
button.addEventListener("click", () => {
  let numSquares = prompt("How many squares per side for the new grid?");
  while (!Number.isInteger(Number(numSquares)) || numSquares < 1 || numSquares > 100) {
    numSquares = prompt("Please enter an integer between 1 and 100:");
  }
  newGrid(numSquares);
});

body.insertBefore(button, container);