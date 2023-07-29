export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = idx;
    arrvalue = [];
    arrvalue.push(`${appendString}${value}`);
  }
  return arrvalue;
}