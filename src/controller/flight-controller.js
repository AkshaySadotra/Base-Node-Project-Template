// const { response } = require('express');
const{FlightService} = require('../services');
const{StatusCodes} = require('http-status-codes')
const{SuccessResponse, ErrorResponse} = require('../utils/common');

/*
this is how api will look like 
POST:/flights
req-body :
{flightNumber,
airplaneId,
departureAirportId,
arrivalAirportId,
arrivalTime,
departureTime,
price,
boardingGate,
totalSeats
}
*/
async function createFlight(req, res){
    try {
    const flight = await FlightService.createFlight({
     flightNumber:req.body.flightNumber,
     airplaneId:req.body.airplaneId,
     departureAirportId:req.body.departureAirportId,
     arrivalAirportId:req.body.arrivalAirportId,
     arrivalTime:req.body.arrivalTime,
     departureTime:req.body.departureTime,
     price:req.body.price,
     boardingGate:req.body.boardingGate,
     totalSeats:req.body.totalSeats
    }); 

    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
    } catch (error) {

         ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
    
    try {
        console.log(req.query)
        const flights = await FlightService.getAllFlights(req.query)
    SuccessResponse.data = flights;
      return res.status(StatusCodes.CREATED)
              .json(SuccessResponse);
    } catch (error) {
        
         ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
    }
}

// get: /flights/:id
async function getFlight(req, res) {
     try {
    const flight = await FlightService.getFlight(req.params.id);
    SuccessResponse.data = flight;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    
      ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}
async function updateSeats(req,res){
  try {
    const response = await FlightService.updateSeats({
      flightId :req.params.id, 
      seats:req.body.seats,
      dec :req.body.dec
    })
    SuccessResponse.data = response;
     return res.status(StatusCodes.OK)
              .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode)
              .json(ErrorResponse);
  }
}

module.exports ={
    createFlight,
    getAllFlights, 
    getFlight,
    updateSeats 
}