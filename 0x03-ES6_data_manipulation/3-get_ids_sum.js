export default function getStudentIdsSum(students) {
  const value = students.reduce((accum, curr) => accum + curr.id, 0);
  return value;
}