const express = require('express');
const{AirplaneController} = require('../../controller')
const router = express.Router();
//   /api/v1/airplanes : post request

const{AirplaneMiddlewares}  = require('../../middlewares')
router.post('/',  
                  AirplaneMiddlewares.validateCreateRequest,
                  AirplaneController.createAirplane
            );
//   /api/v1/airplanes : get request
router.get('/',  
                  
                  AirplaneController.getAirplanes
            );
        
        
//   /api/v1/airplanes/:id: get request
router.get('/:id',  
                  
                  AirplaneController.getAirplane
            );

router.delete('/:id',  
                  
                  AirplaneController.destroyAirplane
            ); 
            
// /api/v1/airplanes/:id   patch
router.patch('/:id',  
                  
                  AirplaneController.updateAirplane
            );            
module.exports = router;

