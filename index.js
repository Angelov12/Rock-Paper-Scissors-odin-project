function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}


  document.querySelector(".btns-container").addEventListener("click", function (e) {
      const btn = e.target.closest("button");
      if (btn) {
       console.log(btn.id)
      }
    });

function playGame() {
  let humanScore = 0;
  let ComputerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      alert("it's a tie");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      alert(`You won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      alert(`“You lose! ${computerChoice} beats ${humanChoice}`);
      ComputerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > ComputerScore) {
    alert(
      `You won! Your score: ${humanScore} vs Computer score ${ComputerScore}`,
    );
  } else if (humanScore === ComputerScore) {
    alert("it's a tie");
  } else {
    alert(
      `You lost Your score: ${humanScore} vs Computer score ${ComputerScore}`,
    );
  }
}

// playGame();
