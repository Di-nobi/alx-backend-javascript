export default function createInt8TypedArray(length, position, value) {
  const firstArray = new ArrayBuffer(length);
  const secondArray = new DataView(firstArray);
  if (position >= length) {
    throw Error('Position outside range');

  }
  secondArray.setInt8(position, value);
  return secondArray;
}