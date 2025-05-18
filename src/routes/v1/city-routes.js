const express = require('express');
const {CityMiddleWares} = require('../../middlewares')
const {CityController} = require('../../controller')
const router = express.Router();

// post /api/v1/cities

router.post('/',
        CityMiddleWares.validateCreateRequest,
        CityController.createCity
);

router.delete('/:id', CityController.deleteCity)

module.exports = router;