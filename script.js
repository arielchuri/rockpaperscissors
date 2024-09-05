console.log("Hello World!");

function getComputerChoice() {
  var randomNum = Math.random();
  if (randomNum > 0.67) {
    var computerChoice = "Rock";
  } else if (randomNum > 0.34) {
    var computerChoice = "Paper";
  } else {
    var computerChoice = "Scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  var userInput = prompt("Enter a number: 1. Rock, 2. Paper, 3. Scissors");
  if (userInput == 1) {
    var userChoice = "Rock";
  } else if (userInput == 2) {
    var userChoice = "Paper";
  } else {
    var userChoice = "Scissors";
  }
  return userChoice;
}

var humanScore = 0;
var computerScore = 0;

function playRound(roundNum) {
  console.log("Round " + roundNum);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  var result = "N";
  if (humanSelection == computerSelection) {
    result = "Tie";
  } else if (humanSelection == "Rock") {
    if (computerSelection == "Paper") {
      result = "Computer";
    } else {
      result = "Human";
    }
  } else if (humanSelection == "Paper") {
    if (computerSelection == "Scissors") {
      result = "Computer";
    } else {
      result = "Human";
    }
  } else {
    if (computerSelection == "Rock") {
      result = "Computer";
    } else {
      result = "Human";
    }
  }
  console.log("You: " + humanSelection);
  console.log("Computer: " + computerSelection);
  return result;
}

function playGame() {
  console.log("Rock Paper Scissors Challenge");
  for (i = 1; i < 6; i++) {
    var roundWinner = playRound(i);
    if (roundWinner == "Tie") {
      console.log("Tie");
      i = i - 1;
    } else {
      console.log(roundWinner + " wins!");
    }
    if (roundWinner == "Human") {
      humanScore += 1;
    } else if (roundWinner == "Computer") {
      computerScore += 1;
    }
  }
  console.log("Human: " + humanScore + " Computer: " + computerScore);
  humanScore = 0;
  computerScore = 0;
}

playGame();
