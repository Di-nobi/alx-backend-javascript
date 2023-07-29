export default function createIteratorObject(report) {
  const arrval = [];
  for (const idx of Object.values(report.allEmployees)) {
    arrval.push(...idx);
  }
  return arrval;
}