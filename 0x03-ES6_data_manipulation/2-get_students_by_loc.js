export default function getStudentsByLocation(students, city) {
  let obj = students.filter((param) => param.location === city);
  return obj;
}