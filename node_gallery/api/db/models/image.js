const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  path: { type: String, default: "./image" },
  size: { type: Number, max: 1000000 },
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
