const express = require("express");
const { updateMany } = require("../Auth/model/User");
const router = express.Router();
const { register, login, update, deleteUser } = require("./auth");
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);
const { adminAuth } = require("./auth")
router.route("/update").put(adminAuth, update)
router.route("/deleteUser").delete(adminAuth, deleteUser)

module.exports = router;
