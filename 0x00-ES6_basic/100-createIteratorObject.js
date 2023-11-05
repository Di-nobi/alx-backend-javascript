export default function createIteratorObject(report) {
  let arrval = [];
  for (const idx of Object.values(report.allEmployees)) {
    arrval.push(...idx);
  }
  return arrval;
}
