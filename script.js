function populateBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size*size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}

// Use input field to call the changeSize function with it's input value

let inputField = document.querySelector("input");
inputField.style.color = "green";

let setSizeButton = document.querySelector(".set-size");
setSizeButton.addEventListener("click", () => {changeSize(inputField.value)});


