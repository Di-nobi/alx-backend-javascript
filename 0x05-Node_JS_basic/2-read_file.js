const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const figs = data.toString().split('\n').split(',');
    const students = [];
    figs.forEach((data) => {
      students.push(data);
    });
    students.slice(1);
    