// global Variables
let color = "black";
let click = true;

const blackButton = document.querySelector("#black");
const eraserButton = document.querySelector("#eraser");
const greyButton = document.querySelector("#grey");
const randomButton = document.querySelector("#random");
const resetButton = document.querySelector("#reset");

const bodySelector = document.querySelector("body");
const modeDiv = document.querySelector(".mode");

const errorDiv = document.querySelector(".error");

greyButton.addEventListener("click", () => {
  color = "grey";
});
eraserButton.addEventListener("click", () => {
  color = "white";
});
blackButton.addEventListener("click", () => {
  color = "black";
});
randomButton.addEventListener("click", () => {
  color = "random";
});
resetButton.addEventListener("click", () => {
  resetBoard();
});

bodySelector.addEventListener("click", (e) => {
  console.log(e)
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      modeDiv.textContent =
        "Mode: sketching, to stop sketching click the left mouse Button";
    } else {
      modeDiv.textContent =
        "Mode: not sketching, to sketch click the left mouse Button.";
    }
  }
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
    errorDiv.style.display = "none";
    populateBoard(input);
  } else {
    errorDiv.style.display = "flex";
  }
}

let inputField = document.querySelector("input");

let setSizeButton = document.querySelector(".set-size");
setSizeButton.addEventListener("click", () => {
  changeSize(inputField.value);
});

function colorSquare() {
  if (click == true) {
    // this here refers to whatever div we added the eventListener to
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  populateBoard(inputField.value);
}
