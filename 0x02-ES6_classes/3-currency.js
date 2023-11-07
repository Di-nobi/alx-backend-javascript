export default class Currency {
  constructor(code, name) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw TypeError('code must a string');
    }
    this._code = code;
    this._name = name;
  }
  
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(arg) {
    if (typeof arg !== 'string') {
      throw TypeError('Must be a string input');  
    }
    this._name = arg;
  }

  set code(arg1) {
    if (typeof arg1 !== 'string') {
      throw TypeError('Must be a string input');
    }
    this._code = arg1;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
