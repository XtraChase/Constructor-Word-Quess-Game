let char = "";
var quessed;

//constructor letter
var Letter = function(char, underscore) {
  this.char = char;
  this.underscore = underscore;
};

// A function that returns the underlying character if the letter has been guessed,
// or an underscore if the letter has not been guessed
// function returnedGuess() {
//   if (quess ===  {
//     char = quess;
//   } else {
//     char = "_";
//   }
// }

//A function that takes a character as an argument and checks it against the underlying character,
//updating the stored boolean value to true if it was guessed correctly
// function charArgument(var1) {
//   if (var1 === char) {
//     guessed = true;
//   } else {
//     guessed = false;
//   }
// }

module.exports = Letter;
