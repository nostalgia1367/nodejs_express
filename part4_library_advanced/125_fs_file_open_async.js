const fs = require("fs");

fs.readFile("./message.txt", (err, data) => {
  if (err) throw err;
  console.log("비동기방식으로 파일 읽기 처리");
  console.log(data.toString());
});
