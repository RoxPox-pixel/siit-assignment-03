console.log("Dom homework");

let validInput = prompt("Make your pick: rock, paper or scissors?");
document.getElementById("user-choice").textContent = "Your choice is: " + validInput;

console.log(validInput);

let computerChoice = ["rock", "paper", "scissors"];
const randomElement = computerChoice[Math.floor(Math.random() * computerChoice.length)];
document.getElementById("computer-choice").textContent = "Computer's choice is: " + randomElement;

console.log(randomElement);

function detectWinner() {
  let finalResult;
  if (validInput === "rock" && randomElement === "paper") {
    finalResult = "You lost!";
  } else if (validInput === "rock" && randomElement === "scissors") {
    finalResult = "You win!";
  } else if (validInput === "paper" && randomElement === "rock") {
    finalResult = "You win!";
  } else if (validInput === "paper" && randomElement === "scissors") {
    finalResult = "You lost!";
  } else if (validInput === "scissors" && randomElement === "rock") {
    finalResult = "You lost!";
  } else if (validInput === "scissors" && randomElement === "paper") {
    finalResult = "You win!";
  } else {
    finalResult = "It's a tie!";
  }
  

  document.getElementById("round-result").textContent = "The winner is: " + finalResult;
}


detectWinner();
