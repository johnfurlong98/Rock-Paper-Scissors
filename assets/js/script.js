// Options for the game 
let options = ["rock","paper","scissors"];

// References to HTML elements
let computerDisplay = document.getElementById("computerDisplay");
let userDisplay = document.getElementById("userDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScoreDisplay = document.getElementById("userScoreDisplay");
let resultDisplay = document.getElementById("resultDisplay");

// Starting score for computer and user
let computerScore = 0;
let userScore = 0;

// Function to generate computer's option
function getComputerOption(){
    return options[Math.floor(Math.random() * 3)];
}

// Function to determine the winner
function determineWinner(playerOption, computerOption) {
    if (playerOption === computerOption) {
        return "It's a draw!!";
    } else {
        switch (playerOption) {
            case "rock":
                return (computerOption === "scissors") ? "You won!!" : "You lose!";
            case "paper":
                return (computerOption === "rock") ? "You won!!" : "You lose!";
            case "scissors":
                return (computerOption === "paper") ? "You won!!" : "You lose!";            
        }
    }
}

// Function to update the UI
function updateUi(playerOption, computerOption, result) {
    userDisplay.innerText = `User: ${playerOption}`;
    computerDisplay.innerText = `Computer: ${computerOption}`;
    resultDisplay.innerText = result;

    resultDisplay.classList.remove("yellowText", "blackText");

    switch (result) {
        case "You won!!":
            resultDisplay.classList.add("yellowText");
            userScore++;
            userScoreDisplay.innerText = userScore;
            break;
        case "You lose!!":
            resultDisplay.classList.add("blackText");
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
            break;
    }
}

// Function to run the game when a player makes a choice
function runGame(playerOption) {
    let computerOption =getComputerOption();
    let result = determineWinner(playerOption, computerOption);
    updateUi(playerOption, computerOption, result);
}
