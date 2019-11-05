//constructor letter
class Letter {
  constructor(char) {
    this.char = char;
    this.underscore = "_";
    this.guessed = false;
  }

  getChar() {
    if (this.guessed) return this.char;
    else return "_";
  }

  guessChar(var1) {
    if (var1 === this.char) {
      this.guessed = true;
      return true;
    }
    return false;
  }
}

module.exports = Letter;
