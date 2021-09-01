// body parser 미들웨어

// 모듈 불러오기
const express = require('express');
const bodyParser = require('body-parser');

// express 객체 생성
const app = express();

// application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// application/json 파싱
app.use(bodyParser.json());

// express 미들웨어인 static 모듈 활용
app.use(express.static(`${__dirname}/login`));

app.use((request, response) => {
  //POST OR GET을 이용하여 userid
  const userId = request.body.userid || request.query.userid;
  const userPassword = request.body.password || request.query.password;

  response.writeHead('200', { 'Content-Type': 'text/html;charset=utf8' });
  response.write('<h1>ID, PW 결과 값</h1>');
  response.write(`<div><p>${userId}</p></div>`);
  response.write(`<div><p>${userPassword}</p></div>`);
  response.end(JSON.stringify(request.body, null, 2));
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
