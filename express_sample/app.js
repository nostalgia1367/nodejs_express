var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//Express에서 코드를 예쁘게 출력하려면
app.locals.pretty = true;

//Express와 함께 Express 템플릿 엔진 사용법
/*
Express  템플릿
1) view 템플릿이 있는 디렉토리 예) app.set('views','./views(경로)')
> 써주지 않으면 자동적으로 /views이며 관습적으로 Express 템플릿엔진 경로는 /views로 한다.
2) view engine, 사용할 템플릿 엔진 app.set('뷰이름', 'jade')
*/
app.set("views", "./views");
app.set("view engine", "jade");

//정적파일(이미지) 가져오는 법
app.use(express.static("public")); //public이라는 디렉토리
//body-parser를 사용하기 위한 선언
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", function(request, response) {
  response.send("Hello home page");
});

app.get("/login", function(request, response) {
  response.send(
    "<h1>로그인 홈페이지</h1>" +
      "<img width='300' src='newyork.jpg' alt='뉴욕' /> "
  );
});

app.get("/dynamic", function(request, response) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis += "<li>coding" + (i + 1) + "</li>";
  }
  var time = new Date();
  var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>제목</title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul>
            ${time}
        </body>
    </html>
    `;
  response.send(output);
});

//쿼리 스트링 처리하기
app.get("/queryString", function(req, res) {
  res.send(req.query.id + "&" + req.query.name);
});

//시멘틱 URL로 처리하기
app.get("/semantic/:id/:name", function(req, res) {
  res.send(req.params.id + ":" + req.params.name);
});

//위에 선언한 Express 템플릿호출
app.get("/template", function(request, response) {
  //response.render("temp"); // /views/temp.jade 라는 파일이 있어야 한다.
  response.render("temp", { time: new Date(), _title: "제목" }); // /views/temp.jade 라는 파일이 있어야 한다.
});

//get으로 데이터 넘기기
app.get("/form_receive_get", function(request, response) {
  //get이기 때문에 queryString으로 데이터를 받는다.
  var name = request.query.name;
  var description = request.query.description;

  response.send(name + " : " + description);
});

//post로 데이터 넘기기
/**
 * post로 데이터를 받기 위해서는 request.body.name이름 으로 데이터를 가져와야한다.
 * post를 받으려면 app.post()로 데이터를 받으면 되는데 파라미터 받을 때
 * 추가해야 되는 부분이 있다.
 * 이 부분이 바로 body-parser이다.
 *
 * 사용법 :
 * 사용법 참고 URL1 : http://expressjs.com/ko/guide/routing.html
 * 사용법 참고 URL2 : http://expressjs.com/ko/4x/api.html#req.body
 *
 * npm install body-parser --save
 *
 *
 * var bodyParser = require('body-parser');
 * app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
 */
app.post("/form_receive_post", function(request, response) {
  //post이기 때문에 params로 데이터를 받는다.
  var name = request.body.name;
  var description = request.body.description;

  console.log(request.body);
  response.json(request.body);
  //response.send(name + " : " + description);
});

//3000번으로 포트 개방
app.listen(3000, function() {
  console.log("connected 3000 port");
});
