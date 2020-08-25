const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { userRouter } = require("./routes/userRoutes");

const app = express();
const port = 4000;

const url = "mongodb://127.0.0.1:27017/project_matcher";
const router = express.Router();

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      return console.log(err);
    }

    mongoose.createConnection(url);
    console.log(`Connected to MongoDb: ${url}`);
  }
);



app.get("/api", (req, res) => {
  res.send("Home sweet home test 🏚"); // TODO adjust later
});

app.use(require("cors")());
app.use(bodyParser.json()); // req for parsing of requests
app.use("/user", userRouter); // routes for user actions

app.listen(port);
console.log("Project Matcher server started on: " + port);
