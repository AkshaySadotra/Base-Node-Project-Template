const express = require('express');
const router = express.Router();
const {InfoController} = require(`../../controller`)
const airplaneRoutes = require('./airplane-routes')
const cityRoutes = require('./city-routes')
const airportRoutes = require('./airport-routes')
const flightRoutes = require('./flight-routes')

router.use('/airplanes', airplaneRoutes);
router.get('/info',InfoController.info );
router.use('/airports', airportRoutes)
router.use('/cities',cityRoutes)
router.use('/flights',flightRoutes)


module.exports = router;