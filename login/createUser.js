var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "adsnyder",
  password: "ADSunc2022!",
  database: "accounts"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO login_info (user, pass, userID) VALUES ('testUser', 'testPass', 1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
});