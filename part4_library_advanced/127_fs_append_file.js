const fs = require('fs');

const list = [1, 2, 3, 4, 5];

// list.forEach(item => fs.appendFile('./chapters.txt', `chapter ${item}\n`));
list.forEach(item => fs.appendFile('./test/chapters.txt', `chapter ${item}\n`));
