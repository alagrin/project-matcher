"use strict";
module.exports = function (app) {
  var userList = require("../controllers/userController");

  // todoList Routes
  app.route("/users").get(userList.getUsers).post(userList.createUser);

  app
    .route("/users/:email")
    .get(userList.getUserInfo)
    .put(userList.updateUser)
    .delete(userList.deleteUser);
};
