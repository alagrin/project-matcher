"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  projectName: String,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: [
      {
        type: String,
        enum: ["front end", "back end", "data analysis", "general"], //expand to large file, list of topics
      },
    ],
    default: ["general"],
  },
  users: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Projects", ProjectSchema);
