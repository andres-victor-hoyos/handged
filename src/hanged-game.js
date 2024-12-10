
import { ThinkingPlayer } from "./thinking-player.js";
import { Hanged } from "./hanged.js";
import { GuessingPlayer } from "./guessing-player.js";

export function HangedGame() {
  this._guessingplayer = new GuessingPlayer();
  this._hanged = new Hanged();
}
HangedGame.prototype.play = function () {
  let word = new ThinkingPlayer().selectAnWord();
  do {
    this._hanged.show();
    word.show();
    let letter = this._guessingplayer.readLetter();
    if (word.contains(letter)) word.discover(letter);
    else this._hanged.increaseAttempt();
  } while (!word.completed() && !this._hanged.completed());
  if (this._hanged.completed()) {
    console.log("Show Hanged!!!");
  } else {
    console.log("The word was guessed!!!!");
  }
};
