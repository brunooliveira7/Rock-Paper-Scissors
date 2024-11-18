const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.onclick = () => {
  const randomNumber = Math.random();
  // computer making its random choice
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  // comparing the button clicked with the computer's choice
  if (computerMove === "rock") {
    result = "Tie!";
  } else if (computerMove === "paper") {
    result = "You lose!";
  } else if (computerMove === "scissors") {
    result = "You win!";
  }

  // displaying the result in an alert box
  alert(`You picked rock. Computer picked ${computerMove}. ${result}`);
};

paper.onclick = () => {
  const randomNumber = Math.random();
  // computer making its random choice
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  // comparing the button clicked with the computer's choice
  if (computerMove === "rock") {
    result = "You win!";
  } else if (computerMove === "paper") {
    result = "Tie!";
  } else if (computerMove === "scissors") {
    result = "You lose!";
  }

  // displaying the result in an alert box
  alert(`You picked paper. Computer picked ${computerMove}. ${result}`);
};

scissors.onclick = () => {
  const randomNumber = Math.random();
  // computer making its random choice
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  let result = "";
  // comparing the button clicked with the computer's choice
  if (computerMove === "rock") {
    result = "You lose!";
  } else if (computerMove === "paper") {
    result = "You win!";
  } else if (computerMove === "scissors") {
    result = "Tie!";
  }

  // displaying the result in an alert box
  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`);
};
