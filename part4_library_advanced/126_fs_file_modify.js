const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if (err) throw err;
  let contents = data.toString();
  // contents = 'replaced';
  contents += 'replaced\n';
  fs.writeFile('./message.txt', contents);
});
