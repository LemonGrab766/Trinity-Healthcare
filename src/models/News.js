const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
      index: true,
      trim: true,
    },
    subTitle: {
      type: String,
      // required: true,
    },
    text: {
      type: String,
      required: [true, "Text is required"],
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const New = mongoose.models?.New || mongoose.model("New", schema);

module.exports = New;
