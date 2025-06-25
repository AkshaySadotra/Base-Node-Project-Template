const express = require('express');
const{FlightController} = require('../../controller')
const router = express.Router();
//   /api/v1/flights : post request

const{FlightMiddlewares}  = require('../../middlewares')
router.post('/',  
                  FlightMiddlewares.validateCreateRequest,
                  FlightController.createFlight
            );
module.exports = router;

