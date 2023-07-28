export default class Building {
  constructor(sqft) {
  if (this.constructor !== Building && (!this.evacuationWarningMessage)) {
    throw TypeError('Class extending Building must override evacuationWarningMessage');
  }
  this._sqft = sqft;
  }

  get sqft() {
  return this._sqft;
  }
  set sqft(arg) {
    this._sqft = arg;
  }
}