function getComputerChoice(){
    let num = Math.random();
    if(num > (2/3)){
        num = "p";
    } else if(num > (1/3)){
        num = "r";
    } else {
        num = "s";
    }
    return num;
}

function getHumanChoice(){
    let num = prompt("Rock, Paper or Scissors?");
    num=num.toLowerCase().charAt(0);
    return num;
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return "Its a Draw";
    } else if (humanChoice == "p" && computerChoice == "r") {
        return "You Win!";
    } else if (humanChoice == "p" && computerChoice == "s") {
        return "You Lost...";
    } else if (humanChoice == "s" && computerChoice == "p") {
        return "You Win!";
    } else if (humanChoice == "s" && computerChoice == "r") {
        return "You Lost...";
    } else if (humanChoice == "r" && computerChoice == "p") {
        return "You Lost...";
    } else if (humanChoice == "r" && computerChoice == "s") {
        return "You Win!";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        if (result == "You Win!"){
            humanScore++;
        } else if (result == "You Lost..."){
            computerScore++;
        }
    }
    console.log("Computer: " + String(computerScore));
    console.log("You: " + String(humanScore));
    if (computerScore > humanScore){
        console.log("You Lost The Game...");
    } else if (humanScore > computerScore){
        console.log("You Won The Game!");
    } else {
        console.log("The Game Is A Draw");
    }
}

playGame()