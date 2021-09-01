const express = require('express');

const app = express();

app.use(function(request, response) => {
  response.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
});
