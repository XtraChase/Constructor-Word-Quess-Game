//dependencies
//dependencies
var Word = require("./word");
var inquirer = require("inquirer");

//       ******* GAME *******
var newWord = "";

//returns a random secret Word object
function randomWord() {
  var wordStrings = [
    "ahoy",
    "plank",
    "booty",
    "seadog",
    "captain",
    "buccaneer",
    "privateer",
    "arrrr",
    "marooned",
    "parley",
    "cutlass",
    "doubloon",
    "grog",
    "keelhaul",
    "scurvy",
    "barnacles",
    "ship",
    "lad",
    "matey",
    "anchor",
    "pillage",
    "scuttle"
  ];
  //picks a random word string
  var wordString = wordStrings[Math.floor(Math.random() * wordStrings.length)];
  newWord = new Word(wordString);
  // console.log(newWord);
  return newWord;
}

async function game() {
  var guessesAllowed;

  while (true) {
    guesses = 10;
    var word = randomWord();

    while (true) {
      await inquirer
        .prompt([
          {
            type: "input",
            message: "Guess a letter?",
            name: "letter"
          }
        ])
        .then(answer => {
          if (word.guess(answer.letter))
            console.log(answer.letter + " is correct!");
          else {
            console.log(answer.letter + " is incorrect");
            guesses--;
            console.log("You have " + guesses + " guesses remaining.");
          }
          console.log(word.getWord());
        });

      if (guesses === 0) {
        console.log("Sorry, you ran out of guesses.");
        break;
      } else if (word.wordGuessed()) {
        console.log("Congratulations! You guessed it!");
        break;
      }
    }
  }
}

game();
