const express = require("express");
const user = require("../models/user");

const userRouter = express.Router();

userRouter.post("/create", function (req, res) {
  user
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    .then((newUser) => {
      res.json(newUser);
    });
});

module.exports = { userRouter };
