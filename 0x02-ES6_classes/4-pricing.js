import Currency  from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
  if (typeof amount !== 'number') {
    throw TypeError('Value was be a number');
  }
  this._amount = amount;
  this._currency = currency;
  }

  get amount() {
  return this._amount;
  }

  get currency() {
  return this._currency;
  }

  set amount(arg) {
  if (typeof arg !== 'number') {
    throw TypeError('Not a number');
  }
  this._amount = arg;
  }

  set currency(arg1) {

  this._currency = arg1;
  }

  displayFullPrice() {
  return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
  return amount * conversionRate;
  }
}