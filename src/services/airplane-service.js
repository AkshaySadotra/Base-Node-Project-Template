const{AirplaneRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');
const airplaneRepository = new AirplaneRepository();
const{StatusCodes} = require('http-status-codes')
async function createAirplane(data){
try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
} catch (error) {
    
    if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create a new Airplane Object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}

async function getAirplanes(){
    try {
        const airplanes  = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('cannot fetch  data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
}
    
}

async function getAirplane(id){
    try {
        const airplane  = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you have requested was not found", error.statusCode);
        }
        throw new AppError('cannot fetch  data of all airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
}
    
}

module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane
} 