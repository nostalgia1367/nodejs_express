require("http")
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end("Hello Node.js 방가방가!");
  })
  .listen(50000, () => {
    console.log("서버가 동작 중입니다, http://127.0.0.1:50000");
  });
