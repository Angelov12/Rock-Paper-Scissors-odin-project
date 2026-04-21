let humanScore = 0;
let computerScore = 0;
let round = 1;
const userScoreEl = document.getElementById("user-score");
const cpuScoreEl = document.getElementById("cpu-score");
const roundEl = document.getElementById("round");
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

document
  .querySelector(".btns-container")
  .addEventListener("click", function (e) {
    const btn = e.target.closest("button");
    if (!btn || btn.disabled) return;
      let computerChoice = getComputerChoice();
      playRound(btn.id, computerChoice);
      renderComputerChoice(computerChoice);
    
  });

function renderComputerChoice(computerChoice) {
  let icon = document.querySelector(".cpu-selection-container");
  if (computerChoice === "rock") {
    icon.innerHTML = `
   <img id="selection-icon" src="icons/rock.png">
      
      `;
  } else if (computerChoice === "paper") {
    icon.innerHTML = `
   <img id="selection-icon" src="icons/paper.png">
      
      `;
  } else if (computerChoice === "scissors") {
    icon.innerHTML = `
   <img id="selection-icon" src="icons/scissors.png">
      
      `;
  }
}

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
    computerScore++;
  }
  round++;
  updateScores();
}
function updateScores() {
  userScoreEl.textContent = humanScore;
  cpuScoreEl.textContent = computerScore;
  roundEl.textContent = round;

  if (humanScore === 5) {
    alert(
      `You won! Your score: ${humanScore} vs Computer score ${computerScore}. Press f5 to play again`,
    );
    disableButtons();
  } else if (computerScore === 5) {
    alert(`You lost Your score: ${humanScore} vs Computer score ${computerScore}. Press f5 to play again`)
      disableButtons();
  }
}

function disableButtons() {
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.disabled = true;
paperBtn.disabled = true;
scissorsBtn.disabled = true;

rockBtn.style.opacity = "0.5"; 
paperBtn.style.opacity = "0.5"; 
scissorsBtn.style.opacity = "0.5"; 

rockBtn.style.cursor = "not-allowed";
paperBtn.style.cursor = "not-allowed";
scissorsBtn.style.cursor = "not-allowed";

}
