// you can write js here
console.log('exo-3');
var userInput = prompt('choisissez entre rock, scissors et paper');

function getUserChoise(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else if(userInput === 'bomb'){
        return userInput;
        
    }

    else {
        console.log('recommence');
    }

}

function getComputerChoice() {

    var nombre = Math.floor(Math.random() * 3);

    if (nombre === 0) {
        return 'rock';
    }
    else if (nombre === 1) {
        return 'papper';

    }
    else {
        return 'scissors';
    }
}

function determineWinner(getComputerChoice, getUserChoise) {
    if (getComputerChoice === getUserChoise) {
        return 'Tied';
    }
    if(getUserChoise === 'bomb'){
        return 'fucking cheater ! you Won'

    }
    else if (getUserChoise === 'rock') {
        if (getComputerChoice === 'paper') {
            return 'Lost';
        }

        else {
            return 'Won';
        }
    }
    else if (getUserChoise === 'scissors') {
        if (getComputerChoice === 'paper') {
            return 'Won';
        }

        else {
            return 'Lost';
        }
    }
    else if (getUserChoise === 'paper') {
        if (getComputerChoice === 'scissors') {
            return 'Lost';
        }

        else {
            return 'Won';
        }
    }

}
function playGame() {
    var uChoice = getUserChoise(userInput);
    var computerChoice = getComputerChoice();
    console.log('utilisateur: ' + uChoice);
    console.log('ordinateur: ' + computerChoice);
    console.log(determineWinner(computerChoice, uChoice));

}
playGame();
