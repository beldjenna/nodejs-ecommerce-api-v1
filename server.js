const express = require("express");
const dotenv = require("dotenv"); 
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");

const app = express();

//config.env
dotenv.config({path: 'config.env'});

dbConnection();

//Middlewares
app.use(express.json());
const morgan = require("morgan");           
if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
}

//Mount Routes
app.use("/api/v1", categoryRoute);

const PORT = process.env.PORT || 8000;              // default value is 8000
app.listen(PORT, () => {
    console.log(`App is listenning to port ${PORT} ...`);
});