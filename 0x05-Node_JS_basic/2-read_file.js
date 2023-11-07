const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const figs = data.toString().split('\n');
    const stds = figs.slice(1).filter((fig) => fig.trim().length > 0).map((fig) => fig.split(','));

    const fields = {};
    stds.forEach((std) => {
      const [firstName,,, field] = std;

      if (!fields[field]) {
        fields[field] = { count: 0, names: [] };
      }

      fields[field].count++;
      fields[field].names.push(firstName);
    });

    console.log(`Number of students: ${stds.length}`);

    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].names.join(', ')}`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
