var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

const dbName = "project_matcher";
let db;

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    db = client.db(dbName);
    console.log(`Connected to MongoDb: ${url}`);
    console.log(`Database: ${dbName}`);
  }
);

app.get("/", (req, res) => {
  res.send("Home sweet home test 🏚") // always responds with the string "TODO"
});

app.use(require("cors")());

app.listen(port);

console.log("Project Matcher server started on: " + port);
