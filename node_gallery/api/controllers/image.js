"use  strict";
const Image = require("../db/models/image");

module.exports = {
  listImages,
  createImage,
  readImage,
  updateImage,
  deleteImage,
};

async function listImages(req, res, next) {
  const all = await Image.find();
  res.json(all);
}

async function createImage(req, res, next) {
  const { title, description, path, size, date } = req.body;
  try {
    const image = new Image({ title, description, size, path, date });
    image.save();
    res.json({ messages: "Udało się dodać obrazek" });
  } catch (res) {
    res.json({ messages: res });
  }
}

async function readImage(req, res, next) {
  try {
    const image = await Image.findById(req.params.imageId);
    res.json(image);
  } catch {
    res.json({ message: "Obrazek o danym Id nie istnieje" });
  }
}

async function updateImage(req, res, next) {
  try {
    await Image.findByIdAndUpdate(req.params.imageId, req.body);
    res.json({ messages: "Dokonano modyfikacji" });
  } catch {
    res.json({ messages: "Nie udało się zaktualizować obrazka" });
  }
}

async function deleteImage(req, res, next) {
  try {
    await Image.findByIdAndDelete(req.params.imageId);
    res.json({ messages: "Usunięto" });
  } catch {
    res.json({ messages: "Nie udało się usunąć obrazka" });
  }
}
