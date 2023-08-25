export default function getListStudentIds(Mapped) {
  if (!Array.isArray(Mapped)) {
    return [];
  }
  return Mapped.map((studentId) => studentId.id);
}
