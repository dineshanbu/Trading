const express = require("express");
const router = express.Router();
const addnewtrade = require("./add_trade.route");


router.use("/addnewtrade", addnewtrade);
module.exports = router;
