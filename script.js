const choicesBtn = document.querySelectorAll(".choice-btn");
const result = document.getElementById("result");

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
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
      }
    } else if (playerInput === "Paper") {
      if (computerChoice === "Rock") {
        result.innerHTML = `${resultOfMatch} You win`;
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
      }
    } else if (playerInput === "Scissors") {
      if (computerChoice === "Papaer") {
        result.innerHTML = `${resultOfMatch} You win`;
      } else {
        result.innerHTML = `${resultOfMatch} You loose`;
      }
    }
  });
});
