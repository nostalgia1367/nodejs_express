// static 미들웨어
// express 모듈 불러오기
const express = require('express');

// express 객체 생성
const app = express();

// express 미들웨어인 static 모듈 활용
app.use(express.static(`${__dirname}/multimedia`));
app.use((request, response) => {
  response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });

  var html = `<div>hahahaha</div>`;
  response.write(html)
  response.end('<img src="/newyork.jpg" width="100%"/>');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
