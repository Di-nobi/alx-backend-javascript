export default function getStudentsByLocation(students, city) {
  const obj = students.filter((param) => param.location === city);
  return obj;
}
