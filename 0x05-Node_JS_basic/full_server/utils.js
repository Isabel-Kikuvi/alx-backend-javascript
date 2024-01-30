import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const header = lines.shift().split(',');

        const studentsByField = header.reduce((acc, field) => {
          acc[field] = [];
          return acc;
        }, {});

        lines.forEach(line => {
          const values = line.split(',');
          values.forEach((value, index) => {
            const field = header[index];
            studentsByField[field].push(value);
          });
        });

        resolve(studentsByField);
      }
    });
  });
};

export { readDatabase };

