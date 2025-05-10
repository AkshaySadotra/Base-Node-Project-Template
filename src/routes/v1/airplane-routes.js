const express = require('express');
const{AirplaneController} = require('../../controller')
const router = express.Router();
//   /api/v1/airplanes : post request

const{AirplaneMiddlewares}  = require('../../middlewares')
router.post('/',  
                  AirplaneMiddlewares.validateCreateRequest,
                  AirplaneController.createAirplane);

module.exports = router;

