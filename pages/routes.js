const express = require("express");

const router = express.Router();
const { index, users } = require("./controllers");

router.get("/", index);

/* GET users listing. */
router.get("/users", users);

module.exports = router;
