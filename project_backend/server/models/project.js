const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema({
  projectName: { type: String, required: true },
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

module.exports = mongoose.model("Project", Project);
