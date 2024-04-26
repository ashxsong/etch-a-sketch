const container = document.querySelector("#container");
let square;

for (let i = 0; i < 16 * 16; i++) {
  square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}