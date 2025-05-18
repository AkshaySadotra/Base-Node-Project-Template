const express = require('express');
const {CityMiddleWares} = require('../../middlewares')
const {CityController} = require('../../controller')
const router = express.Router();

// post /api/v1/cities

router.post('/',
        CityMiddleWares.validateCreateRequest,
        CityController.createCity
);
// delete /api/v1/cities/:id
router.delete('/:id', CityController.deleteCity)

// patch /api/v1/cities/:id
router.patch('/:id', CityController.updateCity);

module.exports = router;