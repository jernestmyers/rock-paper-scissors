// ROCK PAPER SCISSORS

// create array with 3 options for computer
// randomly select one of 3 options for computer
// prompt user to select rock paper or scissors

// alert cpu wins:  cpu = rock AND user = scissors  OR
//                  cpu = scissors AND user = paper OR
//                  cpu = paper AND user = rock

// alert draw: cpu = user

// else: alert user wins

// let cpuOptions = ['rock', 'paper', 'scissors'];
// const computerSelection = computerPlay();

// function computerPlay() {
//     return cpuOptions[Math.floor(Math.random(cpuOptions.length) * cpuOptions.length)];
// }

// function runRound() {
//     let user = prompt(`Enter rock, paper, or scissors.`);
//     let playerSelection = user.toLowerCase();
//     console.log(playerSelection);
//     let cpu = cpuOptions[Math.floor(Math.random(cpuOptions.length) * cpuOptions.length)];
//     console.log(cpu);
//     if (cpu == 'rock' && playerSelection == 'scissors' ||
//         cpu == 'paper' && playerSelection == 'rock' ||
//         cpu == 'scissors' && playerSelection == 'paper') {
//             alert(`Computer wins! ${cpu} beats ${playerSelection}`);
//         } else if (cpu == playerSelection) {
//             alert(`Draw!`);
//         } else {
//             alert(`You win! ${playerSelection} beats ${cpu}`);
//         }
// }

// create new function game()
// run 5 rounds vs computer
// record result for each round - how? 
// delare winner after 5 rounds
// cpu wins if cpu wins > user wins
// draw if cpu wins == user wins (possible with 1, 3 or 5 draws)



// computerPlay() function
// randomly generate Rock Paper or Scissors from an array
// return as computerSelection

// playRound() function with parameters playerSelection and computerSelection
// if cpu == user, alert draw
// if cpu == rock && user == scissors, alert cpu wins
// do other variations of cpu winnings
// else, alert user wins

// playerSelection() function
// prompt user to input rock paper or scissors
// take input and change toLowerCase to make case insensitive when comparing
// create invalid entry if input != rock, paper, or scissors (must compare case insensitive)

 // game() function
 // incremement 5 rounds of the game
 // record if cpu or user wins
 // compare cpu to user wins to alert overall winner (and score?)





const playerSelection = userPlay();
const computerSelection = computerPlay();
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
    console.log(`you threw down ${playerSelection}.`);
    console.log(`computer threw down ${computerSelection}.`);
    console.log(`userScore is ` + userScore);
    console.log(`cpuScore is ` + cpuScore);
    console.log(`numberDraws is ` + numberDraws);
 }

console.log(playRound(playerSelection, computerSelection));
// console.log(game());

// function game() {
//     for (let round = 1; round < 6; round++) {


//     }
// }