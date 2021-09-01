const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('동기방식으로 파일 읽기 처리');
console.log(data);
console.log(string);
