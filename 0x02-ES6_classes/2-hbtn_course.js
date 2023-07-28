export default class HolbertonCourse {
  constructor(name, length, students) {
  if (typeof name !== 'string') {
    throw TypeError('name must be a string');
  }
  if (typeof length !== 'number') {
    throw TypeError('Length must be a number');
  }
  if (!Array.isArray(students)) {
    throw TypeError('Must be an Array');
  }
  this._name = name;
  this._length = length;
  this._students = students;
  }

  get name() {
  return this._name;
  }

  get length() {
  return this._length;
  }

  get students() {
  return this._students;
  }

  set name(arg) {
    if (typeof arg !== 'string') {
      throw TypeError('name must be a String');
    }
    this._name = arg;
    }

  set length(arg1) {
    if (typeof arg1 !== 'number') {
      throw TypeError('length must be a String');
    }
    this._length = arg1;
    }
   set students(arg2) {
     if (!Array.isArray(arg2)) {
       throw TypeError('Must be an Array');
    }
     this._students = arg2;
    }
}