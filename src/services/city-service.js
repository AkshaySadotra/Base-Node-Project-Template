const{CityRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');
const cityRepository = new CityRepository();
const{StatusCodes} = require('http-status-codes')

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        // console.log(error);
         if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function deleteCity(id){
    try {
        const city = await cityRepository.destroy(id);
        return city
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not found', error.statusCode);
        }
        throw new AppError('Cannot delete the data', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}
async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (error) {
        // console.log(error);
        if(error.name =='SequelizeUniqueConstraintError'){
            throw new AppError("The City is already present", StatusCodes.BAD_REQUEST)
        }
        if(error.statusCode == StatusCodes.NOT_FOUND){
            
            throw new AppError('The city you requested to update is not found', error.statusCode);
        }
        throw new AppError('Cannot update the data', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports={
    createCity,
    deleteCity,
    updateCity
}