import { Word } from "./word.js";

export function ThinkingPlayer() {
    this._words = [new Word("Hello"), new Word("World"), new Word("Diveria"), new Word("Elefante"), new Word("Banana"), new Word("Naranja")];
}

ThinkingPlayer.prototype.selectAnWord = function () {
    let index =Math.floor(Math.random() * this._words.length);
    return this._words[index];
};

