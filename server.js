const express = require("express");
const app = express();

//config.env
const dotenv = require("dotenv");           
dotenv.config({path: 'config.env'});

//connect with db
const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI).then((conn) => {
    console.log(`Database is connected: ${conn.connection.host}`);
}).catch((err) => {
    console.error(`Database Error ${err}`);
    process.exit(1);
});

//Middlewares
app.use(express.json());
const morgan = require("morgan");           
if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
}

//1-create schema
const categorySchema = new mongoose.Schema({
    name: String,
});
//2-create model
const CategoryModel = mongoose.model('Category', categorySchema);

//Routes
app.post("/", (req, res) => {
    const name = req.body.name;
    const category = new CategoryModel({name});

    category.save().then((doc) => {
        res.json(doc);
    }).catch((err) => {
        res.json(err);
    })


});

const PORT = process.env.PORT || 8000;              // default value is 8000
app.listen(PORT, () => {
    console.log(`App is listenning to port ${PORT} ...`);
});