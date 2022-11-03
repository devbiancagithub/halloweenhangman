function playGame() {

  //starts game loop
  do {
    alert("Welcome to Halloween Hangman!");

    /* random word setup*/
    var halloweenWords = [
      "halloween",
      "pumpkin",
      "scary",
      "spooky",
      "boo"
    ];
    //creates list of halloween words

    var secretWord = halloweenWords[Math.floor(Math.random() * halloweenWords.length)];
    //chooses array word and stores it to secretWord

    /* input array setup */
    var answerArray = [];
    for (var n = 0; n < secretWord.length; n++) {
      answerArray[n] = "_";
    }
    //matching # of letters in secretWord to answerArray
    //adds new element to each letter of answer array

    /* game loop and user input */
    var remainingLetters = secretWord.length;
    //sets the # of remaining letters in secretWord
    while (remainingLetters > 0) {

      alert("This is your progress so far: " + answerArray.join(" "));
      //shows user guessing progress
      //join() used to join the elements of answerArray into a string

      var userInput = prompt("Please, enter a valid, lowercase, single letter:");

      if (userInput.length !== 1) {
        alert("Please, SINGLE letter!");
      } else {
        for (var m = 0; m < secretWord.length; m++) {
          if (secretWord[m] === userInput) {
            answerArray[m] = userInput;
            remainingLetters--;
          }
          //adds guessed letter input to answerArray
        }
      }
    }
    //end of game

    alert("This is your progress so far: " + answerArray.join(" "));
    alert("Congratulations! You guessed the correct Halloween word! It was: " + secretWord);


    /* game loop until user decides to stop */
    var playAgain = prompt("Would you like to play again? Please, enter yes or no.");
    // prompt user to play again

    if (playAgain === "yes")
      playAgain = true;
    else if (playAgain === "no")
      playAgain = false;

  } while (playAgain !== false)
//end of game loop
}
