const express = require("express");
const router = express.Router();

var picture_controller = require("../controllers/image");

router.get("/:imageId", picture_controller.readImage);
router.get("/", picture_controller.listImages);

module.exports = router;
