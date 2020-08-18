"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: "Enter Username",
  },
  Created_date: {
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
