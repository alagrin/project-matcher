const express = require("express");
const User = require("../models/user");

const userRouter = express.Router();

// get all users from database
userRouter.get("/users", function (req, res) {
  User.find({}, function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
});

// TODO get user by id but route / url is weird
userRouter.get("/:userId", function (req, res) {
 const userId = req.params.userId;
  User.findOne({ _id: userId }, function (err, result) {
    if (err) res.send(err);
    res.json(result);
  });
});

// create a new user
userRouter.post("/create", function (req, res) {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  }).then((newUser) => {
    res.json(newUser);
  });
});

// userRouter.delete("/:userId", function (req, res) {
//   let userId = req.body.email;
//   user.deleteOne("_id = userId", )
// })

module.exports = { userRouter };
