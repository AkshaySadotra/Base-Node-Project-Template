const express = require('express');
const{FlightController} = require('../../controller')
const router = express.Router();
//   /api/v1/flights : post request

const{FlightMiddlewares}  = require('../../middlewares')
router.post('/',  
                  FlightMiddlewares.validateCreateRequest,
                  FlightController.createFlight
            );

 ///api/v1/flights?trips=MUM-DEL : get request
router.get('/', FlightController.getAllFlights) 
// /api/v1/flights/:id get
router.get('/:id', FlightController.getFlight) 

// /api/v1/flights/:id/seats patch
router.patch('/:id/seats', 
                 FlightMiddlewares.validateUpdateSeats,
                 FlightController.updateSeats
                 )
module.exports = router;

 