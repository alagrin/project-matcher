const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
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

module.exports = mongoose.model("User", User);
