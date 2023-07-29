export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = idx;
    const arrvalue = [];
    arrvalue.push(`${appendString}${value}`);
  }
  return arrvalue;
}