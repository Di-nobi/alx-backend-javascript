const http = require('http');
const fs = require('fs');

port = 1245;

hostname = 'localhost';

async function countStudents(path) {
    try {
      const data = await fs.readFile(path, 'utf-8');
      if (data == null) {
          throw Error('Cannot load the database');
      }
      const figs = data.trim().split('\n');
      const output = figs.length - 1
      message = `Number of students: ${output}`;
      console.log(message);
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
      return { message };
      }   catch (error) {
      console.error(error.message);
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
        countStudents(process.argv[2])
        .then((data) => {
            res.write(data.message);
            res.end();
        });
    }
});

app.listen(port, hostname, () => {

});

module.exports = app;