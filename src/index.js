const express = require('express');
const apiRoutes = require('./routes')
const {ServerConfig} = require('./config')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, async ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    // Logger('successfully started the serve ', {});
    // Logger.info('successfully  started the server',{});

    const{Airport, City} = require('./models');
    
    // const bombay = await City.findByPk(2);
    // const bomAirport = await bombay.createAirport({name:'Chhatrapati Shivaji Maharaj International Airport Mumbai', code:'BOM'});
    // console.log(bomAirport);

    // const bomAirport =await bombay.createAirport({name:'Shirdi International Airport', code:'SAG'});
    // console.log(bomAirport);
    const city = await City.findByPk(2);

    await city.destroy({
        where:{
            id:2
        }
    })
})
