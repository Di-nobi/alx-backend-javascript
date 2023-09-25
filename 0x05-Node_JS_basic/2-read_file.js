const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    // console.log(`Data read from file: ${data}`);
    const figs = data.toString().split('\n');
    const output = figs.length - 1
    console.log(`Number of students: ${output}`);
    const field = {};
    for (let count = 1; count < figs.length; count += 1) {
      const dema = figs[count].split(',');
      if (field[dema[3]]) {
        field[dema[3]].push(dema[0]);
      }
      else {
        field[dema[3]] = [dema[0]];  
      }
    };

    for (let aField in field) {
      if (field.hasOwnProperty(aField)) {
        let getlen = field[aField].length;
        let students = field[aField].join(', ');
        console.log(`Number of students in ${aField}: ${getlen}. List: ${students}`);
      }
    };
  } catch (error) {
    console.error("Error:", error);
    throw new Error('Cannot load the database');
    }
  };
  module.exports = countStudents;