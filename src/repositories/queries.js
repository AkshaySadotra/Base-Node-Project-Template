function addRowLockOnFlights(flightId){
    return `SELECT * from  Flights WHERE FLights.id = ${flightId} FOR UPDATE;`
}

module.exports ={
    addRowLockOnFlights
}