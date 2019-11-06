//dependencies
//dependencies
var Word = require("./word");
var inquirer = require("inquirer");

//user input
var guess = process.argv[2];

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
  console.log(newWord);
  return newWord;
}

var word = randomWord();

inquirer
  .prompt([
    {
      type: "input",
      message: "Guess a letter?",
      name: "letter"
    }
  ])
  .then(answer => {
    console.log("Print: " + newWord.word);
    if (answer.letter == newWord.letterArray[0].char) {
      console.log(answer.letter + " is correct!");
      // getWord();
    } else {
      console.log(answer.letter + " is incorrect");
      // console.log(word);
      // getWord();
    }
  });

// console.log("Print: " + Word);
