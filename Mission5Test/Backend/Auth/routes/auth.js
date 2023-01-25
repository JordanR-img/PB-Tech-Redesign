const express = require("express");
const router = express.Router();
const User = require("../model/User")

const loginController = require("../controllers/loginController");

router.post("/register", loginController.register);
router.post("/login", loginController.login);


module.exports = router;

