const express = require('express');
const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    const line = data.split('\n');

    const csli = [];
    const sWE = [];
    /* eslint-disable no-plusplus */
    for (let i = 0; i < line.length; i++) {
      const datas = line[i].split(',');
      const mydata = datas[3];
      if (mydata === 'CS') {
        csli.push(datas[0]);
      } else if (mydata === 'SWE') {
        sWE.push(datas[0]);
      }
    }
    // console.log('This is the list of our students');
    // console.log(`Number of students: ${line.length - 1}`);
    // console.log(`Number of students in CS: ${csli.length}. List: ${csli.join(', ')}`);
    // console.log(`Number of students in SWE: ${sWE.length}. List: ${sWE.join(', ')}`);
    return {
      totalStudents: line.length - 1,
      csStudents: csli,
      sweStudents: sWE,
    };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
const app = express();

app.get('/', (req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.write(`Number of students: ${data.totalStudents}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
  } catch (err) {
    res.write('Cannot load the database');
  }
  res.end();
});

app.listen(1245, '127.0.0.1');

module.exports = app;
