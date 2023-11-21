const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = [];
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (let i = 0; i < keys.length; i += 1) {
        output.push(`Number of students in ${keys[i]}: ${students[keys[i]].length}. List: ${students[keys[i]].join(', ')}`);
      }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${students[field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;


// const readDatabase = require('../utils');

// class StudentsController {
//     static async getAllStudents(request, response) {
//         try {
//             const students = await readDatabase(process.argv[2].toString());
//             const output = ['This is the list of our students'];
    
//             const sortedKeys = Object.keys(students).sort();
//             for (const key of sortedKeys) {
//                 const studentCount = students[key].length;
//                 const studentList = students[key].join(', ');
//                 output.push(`Number of students in ${key}: ${studentCount}. List: ${studentList}`);
//             }
    
//             response.status(200).send(output.join('\n'));
//         } catch (error) {
//             response.status(500).send('Cannot load the database');
//         }
//     }


//     static async getAllStudentsByMajor(request, response) {
//         try {
//             const field = request.params.major;
//             const students = await readDatabase(process.argv[2].toString());
    
//             if (!(field in students)) {
//                 response.status(500).send('Major parameter must be CS or SWE');
//             } else {
//                 const studentList = students[field].join(', ');
//                 response.status(200).send(`List: ${studentList}`);
//             }
//         } catch (error) {
//             response.status(500).send('Cannot load the database');
//         }
//     }
       
// }

// module.exports = StudentsController;