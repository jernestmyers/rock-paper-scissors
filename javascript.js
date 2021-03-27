// ROCK PAPER SCISSORS

// create array with 3 options for computer
// randomly select one of 3 options for computer
// prompt user to select rock paper or scissors

// alert cpu wins:  cpu = rock AND user = scissors  OR
//                  cpu = scissors AND user = paper OR
//                  cpu = paper AND user = rock

// alert draw: cpu = user

// else: alert user wins


let userScore = 0;
let cpuScore = 0;
let numberDraws = 0;

 function computerPlay() {
     let cpuOptions = [`Rock`, `Paper`, `Scissors`];
     return cpuOptions[Math.floor(Math.random()*(cpuOptions.length))];
 }

function userPlay() {
    let userInput = prompt(`Let's throw down! Enter Rock, Paper, or Scissors.`);
    let userLowerCase = userInput.toLowerCase();
    return userLowerCase.replace(userLowerCase[0], userLowerCase[0].toUpperCase());
}


    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            numberDraws += 1;
            alert(`Draw! You both threw down ${playerSelection}.`);
        } else if   (computerSelection == `Rock` && playerSelection == `Scissors` ||
                    computerSelection == `Scissors` && playerSelection == `Paper` ||
                    computerSelection == `Paper` && playerSelection == `Rock`) {
                        cpuScore += 1;
                        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else if (playerSelection != `Rock` && playerSelection != `Scissors` && playerSelection != `Paper`) {
            alert(`Invalid entry. Try again!`);
        } else {
            userScore += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}.`);
        }
    }

function game() {
    for (let round = 1; round < 6; round++) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`userScore is ` + userScore);
    console.log(`cpuScore is ` + cpuScore);
    console.log(`numberDraws is ` + numberDraws);
    }

    if (userScore > cpuScore) {
        alert(`You win! You won ${userScore} rounds and tied ${numberDraws} rounds.`);
    } else if (userScore < cpuScore) {
        alert(`You lose! The computer won ${cpuScore} rounds and you tied ${numberDraws} rounds.`);
    } else {
        alert(`You tied! You and the computer each won ${userScore} rounds and tied ${numberDraws} rounds.`);
    }

}