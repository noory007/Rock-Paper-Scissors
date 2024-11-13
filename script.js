

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function checkWinner(playerSelection, ComputerSelection) {
    if (playerSelection == ComputerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && ComputerSelection == "scissors") ||
        (playerSelection == "scissors" && ComputerSelection == "paper") ||
        (playerSelection == "paper" && ComputerSelection == ComputerSelection == "rock")

    ) {
        return "Player"
    }
    else {
        return "Computer"
    }
}

function playRound(playerSelection, ComputerSelection) {
    const result = checkWinner(playerSelection, ComputerSelection);

    if (result == "Tie") {
        return "It is Tie"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${ComputerSelection}`
    }
    else {
        return `You Lose! ${ComputerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice(){
    let validateInput = false;
    while (validateInput == false){
        const choose = prompt ("Rock Paper Scissors");
        if(choose == null){
            continue
        }
        const choiceInLower = choose.toLowerCase();
        if(choices.includes(choiceInLower)){
            validateInput = true;
            return choiceInLower;
        }
    }

}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome to the Rock, Paper, Scissor Game!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
        if(checkWinner(playerSelection, ComputerSelection) == "Player"){
            scorePlayer++;
        }
            
        else if (checkWinner(playerSelection,ComputerSelection) == "Computer"){
            scoreComputer++;

        }

        

    }

    console.log("The Game is Over")
    if (scorePlayer > scoreComputer){
        console.log ("Player was the winner")
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner");
    }

    else {
        console.log("We have a tie!");
    }
     
}

game();
