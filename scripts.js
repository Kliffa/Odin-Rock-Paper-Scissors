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
    console.log(playerSelection + " " + computerSelection) // call this out to verify whether the if statement below works
    if (playerSelection==computerSelection){
        return "It's a draw. You picked the same as the computer!";
    } else if (playerSelection =="rock" && computerSelection == "paper") { 
        return "You lose! Paper beats rock!";
    } else if (playerSelection =="rock"&& computerSelection == "scissors" ){
        return "You win! Rock beats scissors!";
    } else if (playerSelection =="paper"&& computerSelection == "scissors" ){
        return "You lose! Scissors beat paper";
    } else if (playerSelection =="paper"&& computerSelection == "rock" ){
        return "You win! Paper beats rock!";
    } else if (playerSelection =="scissors"&& computerSelection == "rock" ){
        return "You lose! Rock beats scissors!";
    } else if (playerSelection =="scissors"&& computerSelection == "paper" ){
        return "You win! Scissors beat paper!";
    }
}

const playerSelection = "scissors";
const computerSelection = getComuterChoice();
console.log(playRound(playerSelection, computerSelection));