const path = require('path');
const asyncHandler = require('../middleware/async');
// const CommonHelper = require('../utils/commonHelper')
const AddTradeModel = require('../models/addTrade.model');
const AddStockTypeModel = require('../models/stockType.model');
const AddTradeTypeModel = require('../models/addTradeType.model');

exports.create = asyncHandler(async(req, res) => {
    try {
        const addNewTrade = new AddTradeModel({
            stock_type: req.body.stock_type,
            stock_name: req.body.stock_name,
            entriy_price: req.body.entriy_price,
            exit_price: req.body.exit_price,
            current_price: req.body.current_price,
            capital_investment:req.body.capital_investment,
            total_profit:req.body.total_profit,
            brokage_fees:req.body.brokage_fees,
            total_qty: req.body.total_qty,
            profit_loss:req.body.profit_loss,
            trade_type: req.body.trade_type,
            no_of_Trade: req.body.no_of_Trade,
            user: req.body.user,
        })

        const newTradeDetails = await addNewTrade.save();

        res.status(201).send({
            success: true,
            data: newTradeDetails,
            message: 'You have created  successfully'
        })

    } catch (err) {
        console.log(err.message)
    }
});

exports.addStockType = asyncHandler(async(req, res) => {
    try {
        let checkaccess = await AddStockTypeModel.findOne({
            stock_type_name: req.body.stock_type_name
        });

        const addNewStockType = new AddStockTypeModel({
            stock_type_name: req.body.stock_type_name
        })
        if (checkaccess) {
            console.log("duplicate record found");
            return res.send({
                success: false,
                status: 0,
                data:checkaccess,
                message: "Trade TYpe name already exist"
            });  
        }
        console.log("req.body.stock_type",req.body.stock_type_name);
        if(!req.body.stock_type_name) {
            return res.send({
                success: false,
                message:"Enter the Stock Type Name" 
            })
        }
        const newTradeTypeDetails = await addNewStockType.save();

        res.status(201).send({
            success: true,
            data: newTradeTypeDetails,
            message: 'You have created  successfully'
        })

    } catch (err) {
        console.log(err.message)
    }
});

exports.addTradeType = asyncHandler(async(req, res) => {
    try {
        let checkaccess = await AddTradeTypeModel.findOne({
            trade_type_name: req.body.trade_type_name
        });

        const addNewTradeType = new AddTradeTypeModel({
            trade_type_name: req.body.trade_type_name
        })
        if (checkaccess) {
            return res.send({
                success: false,
                status: 0,
                data:checkaccess,
                message: "Trade TYpe name already exist"
            });  
        }

        if(!req.body.trade_type_name) {
            return res.send({
                success: false,
                message:"Enter the Trade Type Name" 
            })
        }
        const newTradeTypeDetails = await addNewTradeType.save();

        res.status(201).send({
            success: true,
            data: newTradeTypeDetails,
            message: 'You have created  successfully'
        })

    } catch (err) {
        console.log(err.message)
    }
});

