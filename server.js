const express = require("express");
const app = express();

const dotenv = require("dotenv");           //config.env
dotenv.config({path: 'config.env'});

app.use(express.json());



const PORT = process.env.PORT || 8000;              // default value is 8000
app.listen(PORT, () => {
    console.log(`App is listenning to port ${PORT} ...`);
});