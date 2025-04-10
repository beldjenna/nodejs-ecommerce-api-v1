const mongoose = require("mongoose");

//1-create schema
const categorySchema = new mongoose.Schema(
    {
        name: {
            type : String,
            required : [true, "Category is required"],
            unique : [true, "Category must be unique"],
            minlength : [3, "Category name must be more then 3 caracters"],
            maxlength : [32, "Category name must be less then 3 caracters"]
        },
        slug : {
            type : String,
            lowercase : true
        },
        image : String
    },
    {timestamps : true}
);
//2-create model
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;