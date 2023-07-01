//Create a function : getComuterChoice that randomly returns rock paper or scissors

function getComuterChoice(){
    let randomNumber = Math.floor(Math.random()*3); //  creates a random whole number between 0 and 2. so 0,1 or 2
    //console.log(randomNumber);

    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

//console.log(getComuterChoice()) // to check whether the getComputerChoice function works.

// create a function that checks the users input, where the input should be allowed to be case-insensitive
// Then this input is scored against the function getComputerChoice, and then a winner should be declared.
// if not input equals 

function playRound(playerSelection, computerSelection){
    //first make sure the playerSelection is case=insensitive by translating the input to a lower case variant.
    playerSelection = playerSelection.toLowerCase(); // to make sure the input of the player is case insensitive
    console.log(playerSelection + " " + computerSelection) // call this out to verify whether the if statement below works

    if (playerSelection==computerSelection){
        console.log( "It's a draw. You picked the same as the computer!");
    } else if (playerSelection =="rock" && computerSelection == "paper") { 
        computerWins++;
        console.log( "You lose! Paper beats rock!");
    } else if (playerSelection =="rock"&& computerSelection == "scissors" ){
        playerWins++;
        console.log( "You win! Rock beats scissors!");
    } else if (playerSelection =="paper"&& computerSelection == "scissors" ){
        computerWins++;
        console.log( "You lose! Scissors beat paper");
    } else if (playerSelection =="paper"&& computerSelection == "rock" ){
        playerWins++;
        console.log( "You win! Paper beats rock!");
    } else if (playerSelection =="scissors"&& computerSelection == "rock" ){
        computerWins++;
        console.log( "You lose! Rock beats scissors!");
    } else if (playerSelection =="scissors"&& computerSelection == "paper" ){
        playerWins++;
        console.log( "You win! Scissors beat paper!");
    }
}

//let playerSelection = prompt();
//let computerSelection = getComuterChoice();
//console.log(playRound(playerSelection, computerSelection));

// Write a new game() function, where the previous functions are used to play the game 5 times. 
// the winner should be logged after each game, and the final winner should be declared 
//therefore the number of wins should be calculated.
// try a for loop for games 1 - 5


let playerWins = 0; // initializing number of wins for player
let computerWins = 0; // initializing number of wins for computer

function game(){
    for (let i =1;i <6; i++  ){
        let playerSelection = prompt();
        let computerSelection = getComuterChoice();
        playRound(playerSelection,computerSelection);
    }
}
game();
if(computerWins == playerWins){
    console.log("There is no winner this time!");
} else if(computerWins < playerWins){
    console.log("You won the most!");
} else {
    console.log("The computer won the most!");
}