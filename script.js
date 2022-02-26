const choicesBtn = document.querySelectorAll(".choice-btn");
const result = document.getElementById("result");
const playerScoreTxt = document.getElementById("playerScoreTxt");
const computerScoreTxt = document.getElementById("computerScoreTxt");

let playerScore = 0;
let computerScore = 0;

result.innerHTML = "Pick A choice to start";
playerScoreTxt.innerHTML = `Player:${playerScore}`;
computerScoreTxt.innerHTML = `Computer:${computerScore}`;

choicesBtn.forEach((choice) => {
  choice.addEventListener("click", function () {
    const playerInput = this.textContent;
    const computerOptions = ["Rock", "Paper", "Scissors"];
    const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

    const resultOfMatch = `${playerInput} vs ${computerChoice}`;

    //function(playerInput, computerChoice); funktioniert nicht ??

    if (playerInput === computerChoice) {
      result.innerHTML = `${resultOfMatch} it's a Tie`;
      return;
    }

    if (playerInput === "Rock") {
      if (computerChoice === "Scissors") {
        result.innerHTML = `${resultOfMatch} You win`;
        playerScore++;
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
        computerScore++;
      }
    } else if (playerInput === "Paper") {
      if (computerChoice === "Rock") {
        result.innerHTML = `${resultOfMatch} You win`;
        playerScore++;
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
        computerScore++;
      }
    } else if (playerInput === "Scissors") {
      if (computerChoice === "Papaer") {
        result.innerHTML = `${resultOfMatch} You win`;
        playerScore++;
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
        computerScore++;
      }
    }

    if (playerScore === 4) {
      alert("win");
    } else if (computerScore === 4) {
      alert("loss");
    }

    playerScoreTxt.innerHTML = `Player:${playerScore}`;
    computerScoreTxt.innerHTML = `Computer:${computerScore}`;
  });
});
