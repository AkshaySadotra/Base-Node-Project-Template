// const { response } = require('express');
const{AirplaneService} = require('../services');
const{StatusCodes} = require('http-status-codes')
const{SuccessResponse, ErrorResponse} = require('../utils/common')
/*
this is how api will look like 
POST:/airplanes
req-body {modelName: 'airbusa320', capacity:180}
*/
async function createAirplane(req, res){
    try {
    const airplane = await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity :req.body.capacity
    }); 

    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
    } catch (error) {

      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

module.exports ={
    createAirplane
}