// getting the score from local storage - converting string to js object - second step
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

/* if the score is null(false), set it to 0
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
  */

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";
  // computer making its random choice
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  /// calling the function to get the computer's move and var
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    } else if (computerMove === "scissors") {
      result = "You win!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "Tie!";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    } else if (computerMove === "scissors") {
      result = "Tie!";
    }
  }

  // updating the score
  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "Tie!") {
    score.ties += 1;
  }

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You
        <img src="./assets/${playerMove}-emoji.png" alt="" class="move-icon"/>
        <img src="./assets/${computerMove}-emoji.png" alt="" class="move-icon"/>
        Computer`;

  updateScoreElement();

  // JSON only accepts strings. setItem() have two parameters - key and value.
  // saving score to local storage - converting the js object to string - first step
  localStorage.setItem("score", JSON.stringify(score));
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

// choice buttons using event listeners
document
  .querySelector(".rock")
  .addEventListener("click", () => playGame("rock"));

document
  .querySelector(".paper")
  .addEventListener("click", () => playGame("paper"));

document
  .querySelector(".scissors")
  .addEventListener("click", () => playGame("scissors"));

// reset button
document.querySelector(".reset").addEventListener("click", () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  // on click, remove the score from local storage - result null
  localStorage.removeItem("score");
  // update the score
  updateScoreElement();
});
