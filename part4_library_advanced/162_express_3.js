// 요청 메서드
const express = require('express');

const app = express();

app.use((request, response) => {
  const agent = request.header('User-Agent');
  const paramName = request.query.name;
  const browserChrome = 'Hello Chrome';
  const browserOthers = 'Hello Others';

  console.log('request: ', request);
  console.log('request.headers: ', request.headers);
  console.log('request.baseUrl: ', request.baseUrl);
  console.log('request.hostname: ', request.hostname);
  console.log('request.protocol: ',request.protocol);


  if (agent.toLowerCase().match(/chrome/)) {
    response.write(`<div><p>${browserChrome}</p></div>`);
  } else {
    response.write(`<div><p>${browserOthers}</p></div>`);
  }
  response.write(`<div><p>agent: ${agent}</p></div>`);
  response.write(`<div><p>paramName: ${paramName}</p></div>`);
  response.write(`<p>${request.headers}</p>`)
  response.end();
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
