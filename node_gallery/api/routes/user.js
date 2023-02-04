const express = require("express");
const router = express.Router();

var user_controller = require("../controllers/user");

router.post("/login", user_controller.login);
router.post("/register", user_controller.register);

module.exports = router;
