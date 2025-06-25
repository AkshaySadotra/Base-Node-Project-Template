const express = require('express');
const{AirportController} = require('../../controller')
const router = express.Router();
//   /api/v1/airports : post request

const{AirportMiddlewares}  = require('../../middlewares')
router.post('/',  
                  AirportMiddlewares.validateCreateRequest,
                  AirportController.createAirports
            );
//   /api/v1/airports : get request
router.get('/',  
                  
                  AirportController.getAirports
            );
        
        
//   /api/v1/airports/:id: get request
router.get('/:id',  
                  
                  AirportController.getAirport
            );

router.delete('/:id',  
                  
                  AirportController.destroyAirport
            ); 
            
// /api/v1/airports/:id   patch
router.patch('/:id',  
                  
                  AirportController.updateAirport
            );            
module.exports = router;

