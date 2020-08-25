const path = require("path");
const User = require("../models/user");

exports.index = function (req, res) {
  res.sendFile(path.resolve("views/users.html"));
};

exports.getUsers = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
