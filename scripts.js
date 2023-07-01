//Create a function : getComuterChoice that randomly returns rock paper or scissors

function getComuterChoice(){
    let randomNumber = Math.floor(Math.random()*3); //  creates a random whole number between 0 and 2. so 0,1 or 2
    console.log(randomNumber);

    switch(randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

console.log(getComuterChoice()) // to check whether the getComputerChoice function works.