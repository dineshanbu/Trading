const mongoose = require('mongoose');
const stockType = new mongoose.Schema({
    stock_type_name: {
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

const stock_types = new mongoose.model('StockType', stockType);
module.exports = stock_types;