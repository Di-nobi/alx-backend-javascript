export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  const oldValue = 1;
  const newValue = 100;
  for (const [key, value] of map) {
    if (value === oldValue) {
      map.set(key, newValue);
    }
  }
  return map;
}
