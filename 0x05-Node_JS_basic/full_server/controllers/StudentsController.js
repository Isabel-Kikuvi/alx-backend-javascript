import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);

      let responseBody = 'This is the list of our students';
      Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach(field => {
        responseBody += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });

      res.status(200).send(responseBody);
    } catch (error) {
      res.status(500).send(`Cannot load the database${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }

      const studentsByField = await readDatabase(process.argv[2]);

      const majorStudents = studentsByField[major] || [];
      const responseBody = `List: ${majorStudents.join(', ')}`;

      res.status(200).send(responseBody);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  }
}

export default StudentsController;
