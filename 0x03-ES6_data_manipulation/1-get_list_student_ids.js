export default function getListStudentIds(Mapped) {
  return Mapped.map((studentId) =>
    studentId.id
  );
}