const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
  name: { type: String, require: true },
  path: { type: String, default: "./imahe" },
  size: { type: Number, max: 10000 },
});

const Picture = mongoose.model("Picture", PictureSchema);

module.exports = Picture;
