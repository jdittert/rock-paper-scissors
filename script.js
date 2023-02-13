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
    document.getElementById("playerScore").textContent = `Player Score: ${playerScore}.`;
    document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}.`;
}

function endGame() {
    if (playerScore === 5) {
        document.getElementById("final").innerText = "You win the match!" + "\n" + "\n" + "Click to play again.";
        document.getElementById("final").classList.add("green");
    } else if (computerScore === 5) {
        document.getElementById("final").innerText = "Computer wins the match!" + "\n" + "\n" + "Click to play again.";
        document.getElementById("final").classList.remove("green");
        document.getElementById("final").classList.add("red");
    }
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
    document.getElementById("result").textContent = `You chose ${playerChoice.toUpperCase()}. Computer chose ${computerChoice.toUpperCase()}. ${result}`;
    const scores = updateScores(result);
    const end = endGame();
    return result;    
}

document.getElementById("rock").addEventListener("click", function(){ playRound("rock"); });
document.getElementById("paper").addEventListener("click", function(){ playRound("paper"); });
document.getElementById("scissors").addEventListener("click", function(){ playRound("scissors"); });

document.getElementById("playerScore").textContent = `Player Score: ${playerScore}.`;
document.getElementById("computerScore").textContent = `Computer Score: ${computerScore}.`;