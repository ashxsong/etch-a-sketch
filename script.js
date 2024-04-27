let container = document.querySelector("#container");
let square;

for (let i = 0; i < 16 * 16; i++) {
  square = document.createElement("div");
  square.classList.add("square");
  square.style.height = "45px";
  square.style.width = "45px";
  container.appendChild(square);
}

let squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mousemove", function (e) {
    e.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  });
});

const body = document.querySelector("body");
const button = document.createElement("button");

function newGrid(numSquares) {
  container = document.querySelector("#container");
  squares = document.querySelectorAll(".square");
  let squareDim = (752 - 2 * numSquares) / numSquares;
  let squarePixels = String(squareDim) + "px";
  for (square of squares) {
    container.removeChild(square);
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
      e.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    });
  });
}

button.textContent = "New Grid";
button.style.cssText = "background-color: white; padding: 8px 18px; border-style: solid; border-width: 1px; border-color: black; color: black;"
button.addEventListener("click", () => {
  let numSquares = prompt("How many squares per side for the new grid?");
  while (!Number.isInteger(Number(numSquares)) || numSquares < 1 || numSquares > 100) {
    numSquares = prompt("Please enter a number between 1 and 100:");
  }
  newGrid(numSquares);
});

body.insertBefore(button, container);