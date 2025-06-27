// global Variables
let color = "black";

const blackButton = document.querySelector("#black");
const eraserButton = document.querySelector("#eraser");
const greyButton = document.querySelector("#grey");

greyButton.addEventListener("click", () => {
  color = "grey";
});
eraserButton.addEventListener("click", () => {
  color = "white";
});
blackButton.addEventListener("click", () => {
  color = "black";
});

function populateBoard(size) {
  let board = document.querySelector(".board");
  // remove all squares from the DOM before populating new
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("Please type in a number between 2 and 100");
  }
}

let inputField = document.querySelector("input");

let setSizeButton = document.querySelector(".set-size");
setSizeButton.addEventListener("click", () => {
  changeSize(inputField.value);
});

function colorSquare() {
  // this here refers to whatever div we added the eventListener to
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}
