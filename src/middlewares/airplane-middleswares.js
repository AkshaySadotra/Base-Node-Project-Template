const {StatusCodes} = require('http-status-codes')
const{ErrorResponse} = require('../utils/common');
const AppError = require('../utils/error/app-error');
function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber) {
        ErrorResponse.message = "something went wrong while creating an airplane"; 
        ErrorResponse.error= new AppError(['Model number not found in the incoming request in the correct form'],StatusCodes.BAD_REQUEST)
        return res
                   .status(StatusCodes.BAD_REQUEST)
                   .json(ErrorResponse);   
    }
    next();
                      
}

// calling the next middleware if it is in correct format
// and who will be the next middleware, airplane controller will be the next middleware
module.exports = {
    validateCreateRequest
}