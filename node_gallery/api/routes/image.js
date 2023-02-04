const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");

var picture_controller = require("../controllers/image");

router.get("/:imageId", picture_controller.readImage);
router.get("/", picture_controller.listImages);
router.post("/", authenticate, picture_controller.createImage);
router.put("/:imageId", authenticate, picture_controller.updateImage);
router.delete("/:imageId", authenticate, picture_controller.deleteImage);

module.exports = router;
