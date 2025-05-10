const express = require('express');
const router = express.Router();
const {InfoController} = require(`../../controller`)
const airplaneRoutes = require('./airplane-routes')

router.use('/airplanes', airplaneRoutes);
router.get('/info',InfoController.info )


module.exports = router;