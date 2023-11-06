const http = require('http');
const { readFile } = require('fs');

const hostname = 'localhost';
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        output += `Number of students: ${length - 1}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. `;
            output += `List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}
// const http = require('http');
// const fs = require('fs');
// const util = require('util');
// port = 1245;

// hostname = 'localhost';
// const readFileAsync = util.promisify(fs.readFile);
// async function countStudents(fileName) {
//     try {
//       const data = await readFileAsync(fileName, 'utf8');
//       const students = {};
//       const fields = {};
  
//       const lines = data.split('\n').filter(line => line.trim() !== '');
  
//       lines.forEach(line => {
//         const [name, id, email, field] = line.split(',').map(item => item.trim());
  
//         if (students[field]) {
//           students[field].push(name);
//         } else {
//           students[field] = [name];
//         }
  
//         if (fields[field]) {
//           fields[field]++;
//         } else {
//           fields[field] = 1;
//         }
//       });
  
//       const totalStudents = lines.length - 1;
//       let output = `Number of students: ${totalStudents}\n`;
  
//       for (const [key, value] of Object.entries(fields)) {
//         output += `Number of students in ${key}: ${value}. `;
//         output += `List: ${students[key].join(', ')}\n`;
//       }
  
//       return output;
//     } catch (err) {
//       throw err;
//     }
//   }
  
app = http.createServer((req, res) => {
    res.statusCode == 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.write('Hello Holberton School!');
        res.end();
    }
    if (req.url === '/students') {
        res.write('This is the list of our students\n');
        countStudents(process.argv[2].toString())
        .then((data) => {
            const output = data.slice(0, -1);
            res.end(output);
        });
    }
});

app.listen(port, hostname, () => {

});

module.exports = app;