const {StatusCodes} = require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/error/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['FLightNumber not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.airplaneId) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['AirplaneId not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.departureAirportId) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['DepartureAirportId not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.arrivalAirportId) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['ArrivalAirportId not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.arrivalTime) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['ArrivalTime not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.departureTime) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['DepartureTime not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    if(!req.body.price) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['Price not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
     if(!req.body.totalSeats) {
        ErrorResponse.message = "something went wrong while creating a flight"; 
        ErrorResponse.error= new AppError(['TotalSeats not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    
    next();
                      
}
function validateUpdateSeats(req, res, next){
   
    if(!req.body.seats) {
        ErrorResponse.message = "something went wrong while updating a flight"; 
        ErrorResponse.error= new AppError(['Seats not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    next();
}

// calling the next middleware if it is in correct format
// and who will be the next middleware, airplane controller will be the next middleware
module.exports = {
    validateCreateRequest,
    validateUpdateSeats
}