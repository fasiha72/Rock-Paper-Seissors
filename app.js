let userScore = 0;
let computerScore = 0;
let userChoice;
let choices = ["rock", "paper", "scissors"];
let emojis = { "rock": "👊", "paper": "📃", "scissors": "✂" };

function game() {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie 🤝 , Try again 💖"
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        //template literals = `` , ${}
        result = `You Win❗ 🎉 You choose ${emojis[userChoice]} and Computer choose ${emojis[computerChoice]}`;
        userScore++;

    }
    else {
        result = `Computer Win❗ 🎉 Computer choose ${emojis[computerChoice]} and You choose ${emojis[userChoice]}`;
        computerScore++;
    }

    

    document.getElementById('result').innerHTML = result;
    document.getElementById('score').innerHTML = `Score: You - ${userScore} , computer - ${computerScore}`;
}

