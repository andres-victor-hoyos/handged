import { Letter } from "./letter.js";

export function Word(word) {
    this._letters = [];
    for(let i=0; i<word.length;i++)
        this._letters.push(new Letter(word[i]));
}

Word.prototype.show = function () {
    for(let i=0; i<this._letters.length; i++)
        this._letters[i].show();
    console.log("");
};

Word.prototype.discover = function(letter) {
    for(let i=0; i<this._letters.length;i++){
        if(letter.isEqual(this._letters[i]))
            this._letters[i].discover();
    }
};

Word.prototype.contains = function(letter) {
    for(let i=0;i<this._letters.length;i++){
        if(letter.isEqual(this._letters[i]))
            return true;
    }
    return false;
};

Word.prototype.completed = function () {
    for(let i=0; i<this._letters.length;i++){
        if(this._letters[i].isDiscovered())
            return false;
    }
    return true;
};