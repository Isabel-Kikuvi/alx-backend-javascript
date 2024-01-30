const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    const header = lines.shift().split(',');

    const counts = {};

    lines.forEach(line => {
      const values = line.split(',');
      values.forEach((value, index) => {
        const field = header[index];
        if (!counts[field]) {
          counts[field] = {
            count: 0,
            list: [],
          };
        }
        if (index === 0) {
          counts[field].count += 1;
          counts[field].list.push(value);
        }
      });
    });

    console.log(`Number of students: ${lines.length}`);

    Object.keys(counts).forEach(field => {
      console.log(`Number of students in ${field}: ${counts[field].count}. List: ${counts[field].list.join(', ')}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
