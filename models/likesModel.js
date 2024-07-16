const mongoose = require("mongoose");

const likesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "user must be filled"],
  },
  repairman: {
    type: mongoose.Schema.ObjectId,
    ref: "Repairman",
    required: [true, "repairman user must be filled"],
  },
  like: {
    type: Number,
    min: 1,
    max: 1,
    default: 1,
  },
});

likesSchema.pre(/^find/, function (next) {
  this.populate({
    path: "repairman",
    select: "name",
  }).populate({
    path: "user",
    select: "name",
  });
  next();
});

const Likes = mongoose.model("Likes", likesSchema);
module.exports = Likes;
