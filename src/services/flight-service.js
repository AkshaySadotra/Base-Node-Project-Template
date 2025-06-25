const{FlightRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');
const flightRepository = new FlightRepository();
const{StatusCodes} = require('http-status-codes')
const {compareTime} = require('../utils/helpers/dateTime-helpers')
async function createFlight(data){
try {
    console.log(data)
      // Time check: departureTime must be before arrivalTime
        const isDepartureAfterArrival = compareTime(data.departureTime, data.arrivalTime);
        if (isDepartureAfterArrival) {
            throw new AppError(
                'Departure time must be strictly before arrival time.',
                StatusCodes.BAD_REQUEST
            );
        }
    const flight = await flightRepository.create(data);
    return flight;
} catch (error) {
    
    if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
        throw new AppError(explanation,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('cannot create a new flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
}
}



module.exports ={
    createFlight,
   
} 