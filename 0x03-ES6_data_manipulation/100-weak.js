export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, counter + 1);
  if (counter >= 4) {
    throw Error('Endpoint load is high');
  }
}
