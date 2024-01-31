const fs = require('fs').promises;

async function readDatabase(path) {
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
    //   totalStudents: line.length - 1,
      csStudents: csli,
      sweStudents: sWE,
    };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
