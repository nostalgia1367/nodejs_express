const ejs = require("ejs");
const fs = require("fs");
const http = require("http");

http
  .createServer((request, response) => {
    fs.readFile(`${__dirname}/154_ejs_example.ejs`, "utf-8", (error, data) => {
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(ejs.render(data));
    });
  })
  .listen(50000, () => {
    console.log("서버가 동작 중입니다, http://127.0.0.1:50000");
  });
