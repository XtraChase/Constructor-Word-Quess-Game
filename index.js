//dependencies
//dependencies
var Word = require("./word");
var inquirer = require("inquirer");

//user input
var quess = process.argv[2];

//       ******* GAME *******

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
	var wordString = wordStrings[Math.floor(Math.random() * words.length)];
	var newWord = new Word(wordString);
	return newWord;
}

var word = randomWord();

inquirer
	.prompt([
		{
			type: "input",
			message: "Quess a letter?",
			name: "letter"
		}
	])
	.then(answer => {
		if () {
			console.log(answer.letter + " is correct!");
		} else {
			console.log(answer.letter + " is incorrect");
		}
	});
