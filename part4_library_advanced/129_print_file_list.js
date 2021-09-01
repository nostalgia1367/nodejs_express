const testFolder = './';
const currentFolder = `${__dirname}`;

console.log(currentFolder);
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder);

const fileCurrentList = fs.readdirSync(currentFolder);

console.log(JSON.stringify(filenameList));
console.log("=====================");
console.log(JSON.stringify(fileCurrentList));
console.log("=====================");

filenameList.forEach((fileName) => {
  console.log(fileName);
});
