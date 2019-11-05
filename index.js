//dependencies
var Word = require("./word");
var inquirer = require("inquirer");

//user input
var quess = process.argv[2];

//       ******* GAME *******

//assigns a random secret word
function randomWord() {
  var words = [
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
  //picks a random word
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "Quess a letter?",
      name: "letter"
    }
  ])
  .then(answer => {
    if ((answer.letter = Word[i])) {
      console.log(answer.letter + " is correct!");
    } else {
      console.log(answer.letter + " is incorrect");
    }
  });
