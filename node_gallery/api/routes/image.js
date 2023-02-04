const express = require("express");
const router = express.Router();

var picture_controller = require("../controllers/image");

router.get("/:imageId", picture_controller.readImage);
router.get("/", picture_controller.listImages);
router.post("/", picture_controller.createImage);
router.put("/:imageId", picture_controller.updateImage);
router.delete("/:imageId", picture_controller.deleteImage);

module.exports = router;
