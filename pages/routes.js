const express = require("express");

const router = express.Router();
const { index, users } = require("./controllers");

router.get("/", index);
module.exports = router;
