const mongoose = require("mongoose");
const url = "mongodb://userGallery:rootpass@localhost:27017";
const name = "/galleryDB";

mongoose.connect(url + name, {
  useNewUrlParser: true,
  useUnifiedTypology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
