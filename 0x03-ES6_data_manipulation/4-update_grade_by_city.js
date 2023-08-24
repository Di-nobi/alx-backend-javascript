export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(newGrades) || !Array.isArray(students)) {
    return []
  }
  const eachstudent = students.filter((student) => student.location === city).map((student) => {
  if (grade) {
    student.grade = grade.grade;
  } else {
    student.grade = 'N/A';
  }
  return student;
  })
  return eachstudent;
  
}