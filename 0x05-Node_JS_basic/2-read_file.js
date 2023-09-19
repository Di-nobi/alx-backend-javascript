const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const figs = data.slice(1).split('\n');
    fields = []
    // const students = [];
    // figs.forEach((data) => {
    //   students.push(data);
    // });
    // students.slice(1);
    const students = figs.map((fig) => fig.split(','));
    students.forEach((data) => {
      const [first, last, age, field] = data;
      if (first && last && age && field) {
        fields.push({first, last, age, field});
      }
    });
  }