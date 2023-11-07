export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set size(size) {
    if (typeof size !== 'number') {
      throw TypeError('size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    if (typeof location !== 'string') {
      throw TypeError('location must be a string');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](mtt) {
    return mtt === 'number' ? this._size : this._location;
  }
}
