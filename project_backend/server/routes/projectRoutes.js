const express = require("express");
const Project = require("../models/project");

const projectRouter = express.Router();

// get all projects from database
userRouter.get("/projects", function (req, res) {
    User.find({}, function (err, result) {
      if (err) res.send(err);
      res.json(result);
    });
  });