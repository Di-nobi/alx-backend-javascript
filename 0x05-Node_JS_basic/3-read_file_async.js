const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf8' });

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim().length > 0).map((line) => line.split(','));

    const fieldCounts = {};
    students.forEach((student) => {
      const [firstName,,, field] = student;

      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, names: [] };
      }

      /* eslint-disable no-plusplus */
      fieldCounts[field].count++;
      fieldCounts[field].names.push(firstName);
    });

    console.log(`Number of students: ${students.length}`);

    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
