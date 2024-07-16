const mongoose = require("mongoose");
const repairmanSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "You must add first name"],
    },
    surname: {
      type: String,
      required: [true, "You must add last name"],
    },
    specialty: {
      type: String,
      required: [true, "You must add specialty"],
    },
    photo: {
      type: String,
      default:
        "https://i.etsystatic.com/7843595/r/il/e32962/3244688766/il_570xN.3244688766_j13a.jpg",
    },
    city: {
      type: String,
      required: [true, "You must add city"],
    },
    service: {
      type: mongoose.Schema.ObjectId,
      ref: "Service",
      required: [true, "You must add service"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

repairmanSchema.virtual("likes", {
  ref: "Likes",
  foreignField: "repairman",
  localField: "_id",
});

const Repairman = mongoose.model("Repairman", repairmanSchema);

module.exports = Repairman;
