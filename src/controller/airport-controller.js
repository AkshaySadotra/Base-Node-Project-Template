// const { response } = require('express');
const{AirportService} = require('../services');
const{StatusCodes} = require('http-status-codes')
const{SuccessResponse, ErrorResponse} = require('../utils/common')
/*
this is how api will look like 
POST:/airports
req-body {name: 'igi', code:'DEl', address:'New Delhi', cityId: 6}
*/
async function createAirports(req, res){
    try {
    const airplane = await AirportService.createAirport({
       name:req.body.name,
       code:req.body.code,
       address:req.body.address,
       cityId:req.body.cityId
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
/*
this is how api will look like 
get:/airports

*/
async function getAirports(req, res){
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.data = airports;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    
      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}


/*
this is how api will look like 
get:/airports/:id

*/

async function getAirport(req, res){
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    
      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

// delete: /airports/:id
async function destroyAirport(req, res){
  try {
    const airport = await AirportService.destroyAirport(req.params.id);
    SuccessResponse.data = airport;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    
      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}



// patch: /api/airports/:id
//req body  {name:'jai durga airport}
async function updateAirport(req, res){
  try {
    const airport = await AirportService.updateAirport(req.params.id,{
      name: req.body.name
    } );
    SuccessResponse.data = airport;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    
      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}


module.exports ={
    createAirports,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport

}