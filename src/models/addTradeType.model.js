const mongoose = require('mongoose');
const tradeType = new mongoose.Schema({
    trade_type_name: {
        type: String,
        required: true
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
    }
});

const trade_types = new mongoose.model('tradeType', tradeType);
module.exports = trade_types;