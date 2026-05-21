let humanScore = 0;
let computerScore = 0;
let rounds = 5;
let roundNumber = 0;

// Cache DOM elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundsLeftTxt = document.querySelector("#roundsLeft");
const humanScoreTxt = document.querySelector("#humanScore");
const computerScoreTxt = document.querySelector("#computerScore");
const finalResultTxt = document.querySelector("#finalResult");

// Initialize UI
updateRoundsLeft();

function updateRoundsLeft() {
    if (roundsLeftTxt) {
        roundsLeftTxt.textContent = `Rounds Left: ${rounds - roundNumber}`;
    }
}

function getComputerChoice() {
    const selector = Math.random();
    if (selector < 0.33) {
        return "Rock";
    } else if (selector < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(event) {
    if (event.currentTarget.id === "rock") return "Rock";
    if (event.currentTarget.id === "paper") return "Paper";
    if (event.currentTarget.id === "scissors") return "Scissors";
    return "";
}

function handleRound(humanChoice) {
    if (roundNumber >= rounds) return;

    roundNumber++;
    const computerChoice = getComputerChoice();
    const resultElement = document.querySelector(`#resultOfRound${roundNumber}`);
    let roundResultText = `Round ${roundNumber}: ${humanChoice} vs. ${computerChoice}`;

    if (resultElement) {
        // Clear any previous text
        resultElement.textContent = "";
        
        if (humanChoice === computerChoice) {
            roundResultText += " - Draw!";
            resultElement.classList.add("draw");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++;
            roundResultText += " - You Win!";
            resultElement.classList.add("win");
        } else {
            computerScore++;
            roundResultText += " - Computer Wins!";
            resultElement.classList.add("loss");
        }
        
        resultElement.textContent = roundResultText;
    }
    
    console.log(roundResultText);

    updateRoundsLeft();
    updateTally();
}

function updateTally() {
    if (humanScoreTxt) humanScoreTxt.textContent = humanScore;
    if (computerScoreTxt) computerScoreTxt.textContent = computerScore;

    if (roundNumber === rounds) {
        if (finalResultTxt) {
            finalResultTxt.classList.add("game-finished");
            if (humanScore > computerScore) {
                finalResultTxt.textContent = `🏆 Victory! You won the series ${humanScore}-${computerScore}!`;
            } else if (computerScore > humanScore) {
                finalResultTxt.textContent = `💀 Defeat! The Computer won the series ${computerScore}-${humanScore}!`;
            } else {
                finalResultTxt.textContent = "🤝 Draw! The series ended in a tie!";
            }
        }

        // Disable buttons when game is over
        if (rockBtn) rockBtn.disabled = true;
        if (paperBtn) paperBtn.disabled = true;
        if (scissorsBtn) scissorsBtn.disabled = true;
    }
}

// Add event listeners
if (rockBtn) {
    rockBtn.addEventListener("click", (event) => handleRound(getHumanChoice(event)));
}
if (paperBtn) {
    paperBtn.addEventListener("click", (event) => handleRound(getHumanChoice(event)));
}
if (scissorsBtn) {
    scissorsBtn.addEventListener("click", (event) => handleRound(getHumanChoice(event)));
}