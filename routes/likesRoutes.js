const express = require("express");
const router = express.Router({ mergeParams: true });

const likesController = require("../controllers/likesController");
const userController = require("../controllers/userController");

router.use(userController.protect);

router.route("/").get(likesController.getLikes).post(likesController.addLike);

module.exports = router;
