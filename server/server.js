var express = require("express");
var app = express();
var mongoose = require("mongoose");
var body_parser = require("body-parser");
let apiCreateTest = require("./Api/createTest");
let apiSaveTheQuiz = require("./Api/saveTheQuiz");
let apiLogin = require("./Api/loginUser");
let apiContact = require("./Api/contactFeedback");
var path = require("path");
app.use("/", express.static("build"));
// var listCompany = require('./Api/listCompany');
// var listInfoWeb = require('./Api/listInfoWeb');
// var account     = require('./Api/account');
// var path = require('path')
//app.use('/', express.static('build'));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});
//mongodb://cong2020:cong2020@ds053176.mlab.com:53176/crawler-cong
app.use("/Api/question", apiCreateTest);
app.use("/Api/saveTheQuiz", apiSaveTheQuiz);
app.use("/Api/loginUser", apiLogin);
app.use("/Api/contactFeedback", apiContact);
// app.use('/Api/listCompany',listCompany);
// app.use('/Api/listInfoWeb',listInfoWeb);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
//mongodb://localhost/CompanyList
//mongodb://cong2020:cong2020@ds053176.mlab.com:53176/crawler-cong
//app.listen(4000);
//app.listen(4000);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/build/index.html"));
// });
app.listen(process.env.PORT || 4000);
mongoose
  .connect(
    "mongodb+srv://cong2020:cong2020@cluster0.usxpj.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { useFindAndModify: true, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connectedd"))
  .catch((err) => console.log(err));

//useUnifiedTopology: true
