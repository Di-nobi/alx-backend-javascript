export default function createInt8TypedArray(length, position, value) {
  const firstArray = new ArrayBuffer(length);
  const secondArray = new Int8Array(firstArray);
  if (position >= length) {
    throw Error('Position outside range');

  }
  seco