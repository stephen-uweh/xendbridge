const express = require("express");
const router = express.Router();
const { transaction } = require("../controllers/transaction");

router.post('/buy', transaction.buy);

module.exports = router;