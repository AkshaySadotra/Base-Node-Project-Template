const{AirportRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');
const airportRepository = new AirportRepository();
const{StatusCodes} = require('http-status-codes')
async function createAirport(data){
try {
    const airport = await airportRepository.create(data);
    return airport;
} catch (error) {
    
    if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create a new Airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}

async function getAirports(){
    try {
        const airports  = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('cannot fetch  data of all airports',StatusCodes.INTERNAL_SERVER_ERROR);
}
    
}

async function getAirport(id){
    try {
        const airport  = await airportRepository.get(id);
        return airport;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you have requested was not found", error.statusCode);
        }
        throw new AppError('cannot fetch  data of all airports',StatusCodes.INTERNAL_SERVER_ERROR);
}
    
}

async function destroyAirport(id){
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you are requested to delete is not found", error.statusCode);
        }
        throw new AppError('cannot destroy the data ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data){
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airport you are requested to update is not found", error.statusCode);
        }
        throw new AppError('cannot destroy the data ', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports ={
    createAirport,
    getAirports,
    getAirport, 
    destroyAirport,
    updateAirport
} 