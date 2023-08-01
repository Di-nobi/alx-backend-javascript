export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades) || !Array.isArray(students)) {
    return []
  }
  const eachstudent = students.filter((student) => student.location === city);
  
}