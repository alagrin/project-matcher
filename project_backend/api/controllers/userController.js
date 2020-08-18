"use strict";

// example code, find is mongoose method to query MongoDB
var mongoose = require("mongoose"),
  User = mongoose.model("Users");

exports.getUsers = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.createUser = function (req, res) {
  // logic here
};

exports.getUserInfo = function (req, res) {
  // logic here
};

exports.updateUser = function (req, res) {
  // logic here
};

exports.deleteUser = function (req, res) {
  // logic here
};
