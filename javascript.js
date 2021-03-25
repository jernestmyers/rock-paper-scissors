// ROCK PAPER SCISSORS

// create array with 3 options for computer
// randomly select one of 3 options for computer
// prompt user to select rock paper or scissors

// alert cpu wins:  cpu = rock AND user = scissors  OR
//                  cpu = scissors AND user = paper OR
//                  cpu = paper AND user = rock

// alert draw: cpu = user

// else: alert user wins

let cpuOptions = ['rock', 'paper', 'scissors'];

function runRound() {
    let user = prompt(`Enter rock, paper, or scissors.`);
    let playerSelection = user.toLowerCase();
    console.log(playerSelection);
    let cpu = cpuOptions[Math.floor(Math.random(cpuOptions.length) * cpuOptions.length)];
    console.log(cpu);
    if (cpu == 'rock' && playerSelection == 'scissors' ||
        cpu == 'paper' && playerSelection == 'rock' ||
        cpu == 'scissors' && playerSelection == 'paper') {
            alert(`Computer wins! ${cpu} beats ${playerSelection}`);
        } else if (cpu == playerSelection) {
            alert(`Draw!`);
        } else {
            alert(`You win! ${playerSelection} beats ${cpu}`);
        }
}

// create new function game()
// run 5 rounds vs computer
// record result for each round - how? 
// delare winner after 5 rounds
// cpu wins if cpu wins > user wins
// draw if cpu wins == user wins (possible with 1, 3 or 5 draws)