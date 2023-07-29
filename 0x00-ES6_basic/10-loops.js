export default function appendToEachArrayValue(array, appendString) {
  const arrvalue = [];
  for (const idx of array) {
    const value = idx;
    arrvalue.push(`${appendString}${value}`);
  }
  return arrvalue;
}