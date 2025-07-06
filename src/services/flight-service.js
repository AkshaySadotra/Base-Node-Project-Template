const{FlightRepository} = require('../repositories');
const{Op} = require('sequelize')
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
async function getAllFlights(query){

    // tripes MUM-DEL
    let customFilter = {};
    let sortFilter =[];
    if(query.trips){
       let [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        // todo : add a check that they both aren't same
    }
        // price filter
    if(query.price){
       let [minPrice, maxPrice] = query.price.split("-");
        
        customFilter.price = {
            [Op.between] :[minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }

    if(query.travellers){
        customFilter.totalSeats = {
            [Op.gte] :[query.travellers]
        }
    }
if (query.tripDate) {
    const tripDate = new Date(query.tripDate);
    const startOfDay = new Date(tripDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(tripDate.setHours(23, 59, 59, 999));
    customFilter.departureTime = {
        [Op.between]: [startOfDay, endOfDay]
    };
}
// sorting mechanism 
if(query.sort){
 let params = query.sort.split(',');
 let sortFilters = params.map(param=>param.split('_'));
 sortFilter = sortFilters;
}
    console.log(customFilter)
    try {
        
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights; 
    } catch (error) {
                console.log(error);
        throw new AppError('cannot fetch  data of all flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
// travellers filter 

}

async function getFlight(id){
  try {
        const flight  = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you have requested was not found", error.statusCode);
        }
        throw new AppError('cannot fetch  data of flight',StatusCodes.INTERNAL_SERVER_ERROR);
}
    
}

async function updateSeats(data){
    try {
        const response = await flightRepository.updateRemainingSeats(data.flightId, data.seats, data.dec);
        return response;
    } catch (error) {
        console.log(error)
        throw new AppError('cannot fetch  data of flight',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports ={
    createFlight,
   getAllFlights,
   getFlight,
   updateSeats
} 