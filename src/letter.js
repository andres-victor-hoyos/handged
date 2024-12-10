export function Letter(character) {
    this._character = character;
    this._discovered = false;
}

Letter.prototype.show = function () {
    if (this._discovered) {
      process.stdout.write(this._character);
    } else {
      process.stdout.write('_');
    }
  };

Letter.prototype.isDiscovered = function(){
    return this._discovered;
}

Letter.prototype.isEqual = function(letter){
    return letter._character === this._character;
}

Letter.prototype.discover = function(){
    this._discovered = true;
}