const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};

// const { readFile } = require('fs');

// module.exports = function readStudentDatabase(filePath) {
//   const studentRecords = {};

//   return new Promise((resolve, reject) => {
//     fs.readFile(filePath, 'utf8')
//       .then(data => {
//         const lines = data.split('\n');
//         const recordsWithoutHeader = lines.slice(1);

//         for (let i = 0; i < recordsWithoutHeader.length; i += 1) {
//           if (recordsWithoutHeader[i]) {
//             const fields = recordsWithoutHeader[i].split(',');
//             const studentID = fields[3];

//             if (Object.prototype.hasOwnProperty.call(studentRecords, studentID)) {
//               studentRecords[studentID].push(fields[0]);
//             } else {
//               studentRecords[studentID] = [fields[0]];
//             }
//           }
//         }

//         resolve(studentRecords);
//       })
//       .catch(err => reject(err));
//   });
// };