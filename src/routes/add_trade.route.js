const express = require('express')
const router = express.Router()
var path = require('path');


const {
    create,
    addStockType,
    addTradeType
} = require('../controllers/addTrade');
router.route('/addStockType').post(addStockType)
router.route('/addTradeType').post(addTradeType)
router.route('/create').post(create)
module.exports = router