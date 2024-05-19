const express = require('express');
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


// /にアクセスがあった場合はget関数のみ実行される（全部実行されるわけではない）
//app.get('/', function (req, res) {
// res.send('<h1>トップページ!!</h1>');
//});

//
app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("<h1>正解<h1>");
    res.redirect("/correct.html");
  } else {
    //res.send("<h1>不正解<h1>");
    res.redirect("/wrong.html");
  }
});

app.get('/api/v1/users', function (req, res) {
  console.log(req);
  res.send({
    name: "Mike",
    age: 30
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("I am running!");
});

console.log("最終行");