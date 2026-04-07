

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1){
        return 'rock'
    }else if (randomNumber === 2){
        return 'paper'
    }else if (randomNumber === 3){
        return 'scissors'
    }
}

function getHumanChoice(){
    const getHumanChoice = prompt('Choose: rock, paper, scissors').toLocaleLowerCase()

    return getHumanChoice
    
playRound(humanSelection, computerSelection);

}

let humanScore = 0;
let ComputerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        alert("it's a tie")
    }else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
    alert(`You won! ${humanChoice} beats ${computerChoice}`)
    humanScore++
  }else{
    alert(`“You lose! ${computerChoice} beats ${humanChoice}`);
    ComputerScore++
  }
}

