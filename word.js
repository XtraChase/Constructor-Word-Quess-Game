//dependencies
var Letter = require("./letter");

//constructor word
class Word {
  constructor(newWord) {
    this.word = newWord;
    this.letterArray = [];

    for (var i = 0; i < this.word.length; i++) {
      var letter = new Letter(this.word[i]);
      this.letterArray.push(letter);
      // console.log("Print" + this.letterArray);
    }
  }

  getWord() {
    var wordString = "";
    for (var i = 0; i < this.letterArray.length; i++)
      wordString += this.letterArray[i].getChar() + " ";
    return wordString;
  }

  guess(letter) {
    var guessed = false;
    for (var i = 0; i < this.letterArray.length; i++)
      guessed |= this.letterArray[i].guessChar(letter);
    return guessed;
  }

  wordGuessed() {
    var guessed = true;
    for (var i = 0; i < this.letterArray.length; i++)
      guessed &= this.letterArray[i].guessed;
    return guessed;
  }
}

module.exports = Word;
