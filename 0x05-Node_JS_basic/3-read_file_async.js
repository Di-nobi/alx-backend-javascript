const fs = require('fs').promises;

async function countStudents(path) {
    try {
      const data = await fs.readFile(path, 'utf-8');
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
      console.log(err.message);
    };
  }

// async function countStudents(path) {
//   try {
//     const data = await fs.readFile(path, 'utf-8');
//     if (data == null) {
//         throw Error('Cannot load the database');
//     }
//     const figs = data.trim().split('\n');
//     const output = figs.length - 1
//     console.log(`Number of students: ${output}`);
//     const field = {};
//     // total = 0;
//     // const students = {};
//     for (let count = 1; count < figs.length; count += 1) {
//         const dema = figs[count].split(',');
//         if (field[dema[3]]) {
//         field[dema[3]].push(dema[0]);
//         }
//         else {
//         field[dema[3]] = [dema[0]];  
//         }
//     };
    
//     for (let aField in field) {
//         if (field.hasOwnProperty(aField)) {
//         let getlen = field[aField].length;
//         let students = field[aField].join(', ');
//         console.log(`Number of students in ${aField}: ${getlen}. List: ${students}`);
//         }
//     };
//     }   catch (error) {
//     console.error(error.message);
//     }
// }

module.exports = countStudents;
