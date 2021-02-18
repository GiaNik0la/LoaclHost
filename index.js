const fs = require('fs');

//სერვერი
var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");
const { Db, MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const path = require('path');


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("Images"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/home", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res){
  res.render("LogIn");
});

app.get("/productpage", function (req, res) {
  res.render("productpage");
})

app.get("/quizes", function (req, res) {
  res.render("Quizes");
});

app.get("/quizes/quiz", function (req, res) {
  res.render("Quiz");
});

app.get("/quiz", function (req, res) {
  res.render("Quiz");
});

app.get("/loginasadmin", function (req, res) {
  res.render("LoginAsAdmin");
})

app.get("/admin", function (req, res) {
  res.render("admin");
})

app.get("/admin/addquiz", function (req, res) {
  res.render("adminnewquiz");
})

app.get("/admin/addquiz/setupquiz", function (req, res) {
  res.render("adminnewquiz2");
})


app.listen(3000, function () {
  console.log("Sever started!");
});
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/Images", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("This is error : " + err));


/*
  var count = 0;

//მასივების შექმნა
var Usernames = [];
var Passwords = [];

//შემოწმება
console.log("running");


//შემოწმების სამუდამო ციკლის დაწყება
while (true) {
    try {
        //ფაილის წაკითხვა
        const data = fs.readFileSync('rame.txt', 'UTF-8');

        //ხაზების გამოყოფა
        const lines = data.split(/\r?\n/);

        //ხაზების განცალკევება
        lines.forEach((line) => {
            //თვლა თუ მერამდენე ხაზია
            count++;

            //პაროლის და სახელის იდენტიფიზირება
            if(count % 2 == 0) {
                //პაროლის მასივში გაგზავნა
                Passwords.push(line);
            } else {
                //სახელის მასივში გაგზავნა
                Usernames.push(line);
            }
        });
    } catch (err) {
        console.error(err);
    }
*/