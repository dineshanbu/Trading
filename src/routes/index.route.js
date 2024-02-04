const express = require("express");
const serviceRoutes = require("./service.route");
const router = express.Router();
router.use('/api', serviceRoutes);



router.use('*', async (req, res, next) => {
    return res
        .status(404)
        .json({
            statusCode: 404
        });
});

module.exports = router;