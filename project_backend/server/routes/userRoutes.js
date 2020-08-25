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

// get user by id
userRouter.get("/:userId", function (req, res) {
  const userId = req.params.userId;
  User.findOne({ _id: userId }, function (err, result) {
    if (err) {
      return res.send(err);
    }
    res.json(result);
  });
});

userRouter.put("/:userId", function (req, res) {
  const userId = req.body.userId
  User.findOneAndUpdate(
    { _id: userId },
    { $set: { firstName: req.body.firstName } }
  ).exec(function (err, user) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send({"message": "User updated successfully"});
    }
  });
});

userRouter.delete("/:userId", function (req, res) {
  const userId = req.body.userId;
  console.log(req.params.user);
  User.deleteOne({ _id: userId }, function (err, user) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: `User ${userId} deleted` });
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

module.exports = { userRouter };
