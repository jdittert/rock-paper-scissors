const choices = ["rock", "paper", "scissors"];

let computerChoice;
let playerChoice;
let result;

// Initialize game scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];    
}

function updateScores(result) {
    if (result === "Computer wins!") {
        computerScore++;
    } else if (result === "You win!") {
        playerScore++;
    }
    document.getElementById("scores").textContent = `Player Score: ${playerScore}. Comptuer Score: ${computerScore}.`;
}

function playRound(playerChoice) {
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        result = "It's a draw.";               
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            result = "Computer wins!";                       
        } else {
            result = "You win!";                     
        }               
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "Computer wins!";                      
        } else {
            result = "You win!";                   
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "Computer wins!";                      
        } else {
            result = "You win!";                       
        }
    } else {
        result = "Something went wrong";
    }    
    document.getElementById("result").textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    const scores = updateScores(result);
    return result;    
}

document.getElementById("rock").addEventListener("click", function(){ playRound("rock"); });
document.getElementById("paper").addEventListener("click", function(){ playRound("paper"); });
document.getElementById("scissors").addEventListener("click", function(){ playRound("scissors"); });

document.getElementById("scores").textContent = `Player Score: ${playerScore}. Comptuer Score: ${computerScore}.`;