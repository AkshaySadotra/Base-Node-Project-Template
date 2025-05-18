const express = require('express');

const {CityController} = require('../../controller')
const router = express.Router();

// post /api/v1/cities

router.post('/',
        CityController.createCity
);

module.exports = router;