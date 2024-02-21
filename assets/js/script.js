// Options for the game 
let options = ["rock", "paper", "scissors"];

// References to HTML elements
let computerDisplay = document.getElementById("computerDisplay");
let userDisplay = document.getElementById("userDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScoreDisplay = document.getElementById("userScoreDisplay");
let resultDisplay = document.getElementById("resultDisplay");

// Starting score and max moves for computer and user
let computerScore = 0;
let userScore = 0;

const MAX_MOVES = 5;
let moveCount = 0;

// Function to generate computer's option
function getComputerOption() {
    return options[Math.floor(Math.random() * options.length)];
}

// Function to create HTML element
function createElement(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
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

// Function to check if the game is over
function checkGameOver() {
    return moveCount >= MAX_MOVES;
}

// Function to update the UI
function updateUi(playerOption, computerOption, result) {
    userDisplay.innerHTML = '';
    userDisplay.appendChild(createElement('span', 'User: '));
    userDisplay.appendChild(createElement('span', playerOption));

    computerDisplay.innerHTML = '';
    computerDisplay.appendChild(createElement('span', 'Computer: '));
    computerDisplay.appendChild(createElement('span', computerOption));

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

/**
 * Runs the game when a player makes a choice.
 * @param {string} playerOption The option selected by user.
 */
function runGame(playerOption) {
  if (!checkGameOver()) {
    moveCount++;
    let computerOption = getComputerOption();
    let result = determineWinner(playerOption, computerOption);
    updateUi(playerOption, computerOption, result);
    if (checkGameOver()) {
        showFinalResults();
    }
  }  
}

// Function to show final results
function showFinalResults() {
    
}