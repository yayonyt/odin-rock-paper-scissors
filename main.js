function getComputerChoice() {

    let selector = Math.random();
    if (selector < 0.33) {
        return "Rock";
    }
    else if (selector < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }

}

function getHumanChoice() {

    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (choice == "rock") {
        return "Rock";
    }
    else if (choice == "paper") {
        return "Paper";
    }
    else if (choice == "scissors") {
        return "Scissors";
    }
    else {
        alert("Invalid Choice!");
    }

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = getHumanChoice();
    console.log(`You Chose: ${humanChoice}`);
    computerChoice = getComputerChoice();
    console.log(`The Computer Chose: ${computerChoice}`);
    if (humanChoice == "Rock" && computerChoice == "Rock") {

        console.log("Rock vs. Rock: Draw!");

    }
    else if (humanChoice == "Rock" && computerChoice == "Paper") {

        computerScore++;
        console.log("Rock vs. Paper: Computer Wins!");

    }
    else if (humanChoice == "Rock" && computerChoice == "Scissors") {

        humanScore++;
        console.log("Rock vs. Scissors: You Win!");

    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {

        humanScore++;
        console.log("Paper vs. Rock: You Win!");

    }
    else if (humanChoice == "Paper" && computerChoice == "Paper") {

        console.log("Paper vs. Paper: Draw!");

    }
    else if (humanChoice == "Paper" && computerChoice == "Scissors") {

        computerScore++;
        console.log("Paper vs. Scissors: Computer Wins!");

    }
    else if (humanChoice == "Scissors" && computerChoice == "Rock") {

        computerScore++;
        console.log("Scissors vs. Rock: Computer Wins!");

    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {

        humanScore++;
        console.log("Scissors vs. Paper: You Win!");

    }
    else if (humanChoice == "Scissors" && computerChoice == "Scissors") {

        console.log("Scissors vs. Scissors: Draw!");

    }

}

function playGame() {

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Your final score is: ${humanScore}`);
    console.log(`The Computer's final score is: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You Win!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer Wins!");
    }
    else {
        console.log("Draw!");
    }

}

playGame();