"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: {
    type: String,
    required: "Enter email",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  level: {
    identifier: [
      {
        identifier: String,
        enum: ["beginner", "intermediate", "advanced"],
      },
    ],
    default: ["beginner"],
  },
});

module.exports = mongoose.model("Users", UserSchema);
