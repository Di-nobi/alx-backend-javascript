export default function createIteratorObject(report) {
  let arrval = [];
  for (let idx of Object.values( report.allEmployees)) {
    arrval.push(...idx);
  }
  return arrval;
}