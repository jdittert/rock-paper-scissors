const choices = ["rock", "paper", "scissors"];

let computerChoice;
let playerChoice;
let result;

// Initialize game scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    playerChoice = prompt("Choose 'rock', 'paper', or 'scissors'.").toLowerCase();    
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result = "It's a draw";               
    } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            result = "Computer wins!";
        } else {
            result = "Player wins!";
        }               
    } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "Computer wins!";
        } else {
            result = "Player wins!";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "Computer wins!";
        } else {
            result = "Player wins!";
        }
    } else {
        result = "Something went wrong";
    }
    return result;
}

function game() {
    for (i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        playRound(playerChoice, computerChoice);
        console.log(playRound(playerChoice, computerChoice));
        if (result === "It's a draw") {
            drawScore++;
        } else if (result === "Player wins!") {
            playerScore++;
        } else if (result === "Computer wins!") {
            computerScore++;
        } else {
            console.log("Round invalid. Replay round.");
            i--;
        }
    }
    console.log(`Player: ${playerScore}, Computer: ${computerScore}, Draws: ${drawScore}`);
}

game();

if (playerScore > computerScore) {
    console.log("Player wins the game!");
} else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a tie!");
}

console.log("Refresh the page to play again.");
