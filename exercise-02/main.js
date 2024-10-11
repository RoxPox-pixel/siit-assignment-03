console.log("Part 2 - functions, rock paper, scissors game");

let validInput = prompt(" Make your pick: rock, paper or scissors?");

console.log(validInput);

let computerChoice = ["rock", "paper", "scissors"];
const randomElement = computerChoice[Math.floor(Math.random() * computerChoice.length)];
console.log(randomElement);



function detectWinner() {
    if (validInput === "rock" && randomElement === "paper") {
      alert("You lost !");
    } else if (validInput === "rock" && randomElement === "scissors") {
      alert("You win !");
    } else if (validInput === "paper" && randomElement === "rock") {
      alert("You win !");
    } else if (validInput === "paper" && randomElement === "scissors") {
      alert("You lost !");
    } else if (validInput === "scissors" && randomElement === "rock") {
      alert("You lost !");
    } else if (validInput === "scissors" && randomElement === "paper") {
      alert("You win !");
    } else {
      alert("It's a tie!");
    }
  }

  console.log(detectWinner());