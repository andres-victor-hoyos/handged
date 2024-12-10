const MAX_ATTEMPTS = 6;

export function Hanged() {
  this._attempts = 0;
}

Hanged.prototype.show = function() {
  console.log(`Attempts: ${this._attempts}`);
  // Aquí se podría agregar la lógica para mostrar el dibujo del ahorcado
}

Hanged.prototype.completed = function() {
  return this._attempts >= MAX_ATTEMPTS;
};

Hanged.prototype.increaseAttempt = function() {
  this._attempts++;
};