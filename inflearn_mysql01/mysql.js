var mysql = require("mysql");
var db = mysql.createConnection({
  host: "seiko.diskstation.me",
  user: "nostalgia##########",
  password: "##########",
  database: "nodejs200"
});

db.connect();

var sql = "SELECT * FROM topic";

db.query(sql, function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
  console.log(fields);
});

db.end();
