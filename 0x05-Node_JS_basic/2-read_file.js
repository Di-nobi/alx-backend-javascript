const fs = require('fs');

function countStudents(path) {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const line = data.split('\n');

    const csli = [];
    const sWE = [];
    for (let i = 0; i < line.length; i++) {
        const datas = line[i].split(',');
        const mydata = datas[3];

        if (mydata == 'CS') {
            csli.push(datas[0]);
        } else if (mydata == 'SWE') {
            sWE.push(datas[0]);
        }
    }
    console.log(`Number of students: ${line.length - 1}`);
    console.log(`Number of students in CS: ${csli.length}. List: ${csli.join(', ')}`);
    console.log(`Number of students in SWE: ${sWE.length}. List: ${sWE.join(', ')}`);
}

module.exports = countStudents;