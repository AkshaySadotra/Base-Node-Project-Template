const{CityService} = require('../services');
const{StatusCodes} = require('http-status-codes')
const{SuccessResponse, ErrorResponse} = require('../utils/common');
const { up } = require('../migrations/20250518065927-create-city');
const AppError = require('../utils/error/app-error');


/*
post req :/cities
req-body {name:'Delhi'}
*/
async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city
        return res.
                   status(StatusCodes.CREATED)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.
                   status(error.statusCode)
                  .json(ErrorResponse);
    }
}

// delete /api/v1/cities/:id

async function deleteCity(req,res){
    try {
        const city = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
                  .json(ErrorResponse);
        
    }
}

// patch /api/v1/cities/:id
// req.body:{name:'UpdatedName'}
async function updateCity(req, res){
    try {
        const city = await CityService.updateCity(req.params.id,{
            name :req.body.name
        });
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK)
                  .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}



module.exports={
    createCity,
    deleteCity,
    updateCity
}