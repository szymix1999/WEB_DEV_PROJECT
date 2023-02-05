const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  path: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80",
  },
  size: { type: Number, max: 1000000 },
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
