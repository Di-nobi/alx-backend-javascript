const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(request, response) {
        try {
            const students = await readDatabase(process.argv[2].toString());
            const output = ['This is the list of our students'];
    
            const sortedKeys = Object.keys(students).sort();
            for (const key of sortedKeys) {
                const studentCount = students[key].length;
                const studentList = students[key].join(', ');
                output.push(`Number of students in ${key}: ${studentCount}. List: ${studentList}`);
            }
    
            response.status(200).send(output.join('\n'));
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }


    static async getAllStudentsByMajor(request, response) {
        try {
            const field = request.params.major;
            const students = await readDatabase(process.argv[2].toString());
    
            if (!(field in students)) {
                response.status(500).send('Major parameter must be CS or SWE');
            } else {
                const studentList = students[field].join(', ');
                response.status(200).send(`List: ${studentList}`);
            }
        } catch (error) {
            response.status(500).send('Cannot load the database');
        }
    }
       
}