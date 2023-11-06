const http = require('http');
const fs = require('fs');
const util = require('util');
port = 1245;

hostname = 'localhost';
const readFileAsync = util.promisify(fs.readFile);
async function countStudents(fileName) {
    try {
      const data = await readFileAsync(fileName, 'utf8');
      const students = {};
      const fields = {};
  
      const lines = data.split('\n').filter(line => line.trim() !== '');
  
      lines.forEach(line => {
        const [name, id, email, field] = line.split(',').map(item => item.trim());
  
        if (students[field]) {
          students[field].push(name);
        } else {
          students[field] = [name];
        }
  
        if (fields[field]) {
          fields[field]++;
        } else {
          fields[field] = 1;
        }
      });
  
      const totalStudents = lines.length - 1;
      let output = `Number of students: ${totalStudents}\n`;
  
      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value}. `;
        output += `List: ${students[key].join(', ')}\n`;
      }
  
      return output;
    } catch (err) {
      throw err;
    }
  }
  
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