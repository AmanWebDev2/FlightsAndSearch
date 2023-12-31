const express = require("express"); 
const bodyParser = require("body-parser")
//const {city} = require('./models/index.js');
const {PORT} = require('./config/serverConfig.js')
const ApiRoutes =  require('./routes/index.js')

//const CityRepository = require('./repository/city-repository.js');


const setupAndStartServer = async () => {
    //create the express object
    const app = express();  
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api', ApiRoutes);
    app.listen(PORT, async() => {
        console.log(`Server started at ${PORT}`);
         // console.log(db.city);
        // await city.create({
        //     name:"new delhi",
        // })
        // const repo = new CityRepository();
        // repo.createCity({name:"gurugram"});
      
    });
}
setupAndStartServer();