const mongoose = require('mongoose');
const tradeList = new mongoose.Schema({
    stock_type: {
        type: String,
        required: false
    },
    stock_name: {
        type: String,
        required: true
    },  
    entriy_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    exit_date:{
        type: Date,
    },
    current_price:{
        type:mongoose.Types.Decimal128,
        required: true,
        default: 0
    },
    entriy_price:{
        type: mongoose.Types.Decimal128,
        required: true,
        default: 0
    },
    exit_price:{
        type:mongoose.Types.Decimal128,
        required: true,
        default: 0
    },
    total_qty:{
        type: Number,
        required: true,
        default: 0
    },
    trade_type:{
        type: String,
        default: 0
    },
    capital_investment:{
        type:mongoose.Types.Decimal128,
        default: 0
    },
    total_profit:{
        type:mongoose.Types.Decimal128,
        default: 0
    },
    brokage_fees:{
        type: mongoose.Types.Decimal128,
        default: 0
    },
    profit_loss:{
        type: String,
    },
    no_of_Trade:{
        type: Number,
        required: true
    },
    user:{
        type: String,
        required: true,
    },
    is_active: {
        type: Number,
        default: 1
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const tradingData = new mongoose.model('tradeList', tradeList);
module.exports = tradingData;