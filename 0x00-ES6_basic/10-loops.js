export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = idx;
    arr = [appendString + value];

  }
  return arr;
}