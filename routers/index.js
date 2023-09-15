const express = require("express");
const router = express.Router();
const controllers = require("../utilitis/controllers");
require("../db/connection");

router.post("/",controllers.SendMessages);

module.exports = router