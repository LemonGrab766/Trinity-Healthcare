const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      // required: true,
    },
    text: {
      type: String,
      required: true,
    },
    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", schema);

module.exports = Blog;
