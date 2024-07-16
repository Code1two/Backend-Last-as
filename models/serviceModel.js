const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "You must add name"],
  },
  address: {
    type: String,
    required: [true, "You must add address"],
  },
  manager: {
    type: String,
    required: [true, "You must add manager's name"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
