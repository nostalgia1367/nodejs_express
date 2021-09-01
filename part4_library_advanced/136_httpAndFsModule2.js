const fs = require("fs");
const http = require("http");

const server = http
  .createServer((request, response) => {
    fs.readFile(`${__dirname}/136_example.html`, (err, data) => {
      if (err) throw err;
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(data);
    });
  })
  .listen(50000, () => {
    console.log("서버가 동작 중입니다");
  });
