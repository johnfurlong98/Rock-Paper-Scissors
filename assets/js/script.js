// Options for the game 
let options = ["rock","paper","scissors"];

// References to HTML elements
let computerDisplay = document.getElementById("computerDisplay");
let userDisplay = document.getElementById("userDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let userScoreDisplay = document.getElementById("userScoreDisplay");
let resultDisplay = document.getElementById("resultDisplay");

//Starting score for computer and user
let computerScore = 0;
let userScore = 0;

//Function to run game when the user makes a choice
function runGame(userOption){

     let computerOption = options[Math.floor(Math.random() * 3)];

}
