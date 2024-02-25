/**
 * Options for the game.
 */
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

/**
 * References to HTML elements
 */
let computerDisplay = document.getElementById("computerDisplay");
let userDisplay = document.getElementById("userDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScoreDisplay = document.getElementById("userScoreDisplay");
let resultDisplay = document.getElementById("resultDisplay");

/**
 * Starting score and max moves for computer and user.
 */
let computerScore = 0;
let userScore = 0;

const MAX_MOVES = 5;
let moveCount = 0;

/**
 * To generate computer option.
 */
function getComputerOption() {
    const options = [ROCK, PAPER, SCISSORS];
    return options[Math.floor(Math.random() * options.length)];
}

/**
 * To create html element.
 */
function createElement(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
}

/**
 * To determine the winner.
 */
function determineWinner(playerOption, computerOption) {
    if (playerOption === computerOption) {
        return "It's a draw!!";
    } else {
        switch (playerOption) {
            case ROCK:
                return (computerOption === SCISSORS) ? "You won!!" : "You lose!!";
            case PAPER:
                return (computerOption === ROCK) ? "You won!!" : "You lose!!";
            case SCISSORS:
                return (computerOption === PAPER) ? "You won!!" : "You lose!!";
        }
    }
}

/**
 * To check if game is over.
 */
function checkGameOver() {
    return moveCount >= MAX_MOVES;
}

/**
 * To show the final results.
 */
function showFinalResults() {
    let finalMessage = "";

    if (userScore > computerScore) {
        finalMessage = "Congratulations! You are the overall winner!";
    } else if (userScore < computerScore) {
        finalMessage = "Better luck next time! Computer is the overall winner.";
    } else {
        finalMessage = "It's a tie! The game ends in a draw.";
    }

    resultDisplay.innerText = finalMessage;
}

/**
 * To update the UI
 */
function updateUi(playerOption, computerOption, result) {
    console.log("Result:", result);
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

/**
  * To reset the game.
  */
function resetGame() {
    userScore = 0;
    computerScore = 0;
    moveCount = 0;

    userScoreDisplay.innerText = userScore;
    computerScoreDisplay.innerText = computerScore;

    resultDisplay.innerText = "";

    userDisplay.innerText = "";
    computerDisplay.innerText = "";

    resultDisplay.classList.remove("yellowText", "blackText");
 }