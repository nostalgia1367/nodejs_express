const fs = require('fs');

console.log(`폴더명: ${__dirname}`);
const dirName = `${__dirname}/img1`;

if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}
