const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    if (data == null) {
        throw Error('Cannot load the database');
    }
    const figs = data.toString().split('\n');
    console.log(`Number of students: ${figs.length - 1}`);
    const field = {};
    // total = 0;
    // const students = {};
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
    }   catch (error) {
    console.error(error.message);
    }
}

module.exports = countStudents;