const express = require("express");
const { register, login } = require("../controllers/auth");
const getAllUser = require("../controllers/getAllUser.js");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);

router.get("/users", getAllUser);


module.exports = router;
