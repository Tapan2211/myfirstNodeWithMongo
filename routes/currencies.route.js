const express = require('express');
const router = express.Router(); 

const currenciesController = require("../controllers/currencies.controller");

router.get("/", currenciesController.getCurrencies);

router.get("/:symbol", currenciesController.getCurrencySymbol);

module.exports = router;