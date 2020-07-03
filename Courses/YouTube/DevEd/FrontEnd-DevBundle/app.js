//Generate a random number DONE
//Give the user the ability to guess
//If they guess and they are wrong, ask them again(hint);
//If they win - say that they won

function guessGame() {
  let randomNum = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess a Number between 1-10");
    console.log(guess, randomNum);
    if (randomNum > guess) {
      console.log("Too low. Try again");
    } else if (randomNum < guess) {
      console.log("Too high. Try again");
    }
  } while (guess != randomNum);
  console.log("YOU WON");
}

guessGame();
