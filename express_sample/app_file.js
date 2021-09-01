/**
 * @ 이름과 설명을 입력받아서
 * 파일명 : 이름
 * 기능 : 파일명 이름을 클릭하면 파일명안에 있는 데이터를 리스트로 가져오는 기능
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");

//Express에서 코드를 예쁘게 출력하려면
//app.locals.pretty = true;

//정적파일(이미지) 가져오는 법
app.use(express.static("public")); //public이라는 디렉토리
//app.use(express.static("")); //public이라는 디렉토리

app.set("views", "./views");
app.set("view engine", "jade");
app.get("/topic/new", function(req, res) {
  fs.readdir("data", function(err, files) {
    if (err) {
      console.log(err);
      res.status.send("Internal Server Error" + err);
    }
    res.render("new2", { topics: files });
  });
});

//body-parser를 사용하기 위한 선언
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 * 폴더 디렉토리에 있는 파일의 수만큼 파일의 이름을 알아내
 * 목록 표시를 하려고 한다.
 * jade에서 interation 반복자를 이용하여 표시
 * 참고 URL : http://jade-lang.com/reference/iteration
 */
app.get(["/topic", "/topic/:id"], function(req, res) {
  fs.readdir("data", function(err, files) {
    if (err) {
      console.log(err);
      res.status.send("Internal Server Error" + err);
    }

    var id = req.params.id;
    if (id) {
      fs.readFile("data/" + id, function(err, data) {
        if (err) {
          console.log(err);
          res.status.send("Internal Server Error" + err);
          throw err;
        }
        res.render("view", {
          topics: files,
          title: id,
          description: data
        });
      });
    } else {
      console.log("파일목록:", files);
      res.render("view", {
        topics: files,
        title: "Welcome",
        description: "Hello Main Page"
      });
    }
  });
});

// app.get("/topic/:id", function(req, res) {
//   var id = req.params.id;
//   //   res.send(id);

//   fs.readdir("data", function(err, files) {
//     if (err) {
//       console.log(err);
//       res.status.send("Internal Server Error" + err);
//     }

//     console.log("파일목록:", files);

//     fs.readFile("data/" + id, function(err, data) {
//       if (err) {
//         console.log(err);
//         res.status.send("Internal Server Error" + err);
//         throw err;
//       }
//       res.render("view", {
//         topics: files,
//         title: id,
//         description: data
//       });
//     });
//   });
// });

app.post("/topic", function(req, res) {
  var title = req.body.title;
  var description = req.body.description;

  fs.writeFile("data/" + title, description, function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Serber Error" + err);

      throw err;
    }
    //res.send("파일이 생성되었습니다.");
    res.redirect("/topic/" + title);
  });
});

app.listen(3000, function() {
  console.log("Connected, 3000 port");
});
