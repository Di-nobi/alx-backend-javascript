export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const getSet = [...set];
  return getSet
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
