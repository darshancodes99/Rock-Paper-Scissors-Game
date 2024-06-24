let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userResult = document.querySelector("#user-score");
const compResult = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);

    return option[randomIdx];
}

const drawGame = () => {
   msg.innerText = "Game was Draw. Play again";
   msg.style.backgroundColor = "rgb(122 28 94)";
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userResult.innerText = userScore;

    } else{
        msg.innerText = `You Lose! Computer ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        comScore++;
        compResult.innerText = comScore;
    }
}

const playGame = (userChoice) => {
    
    const compChoice = genComputerChoice();
   
    if(userChoice == compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
          userWin = compChoice === "paper" ? false : true;
        } else if(userChoice == "paper"){
           userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})