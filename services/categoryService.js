const slugify = require("slugify");
const asyncHandler = require('express-async-handler')
const CategoryModel = require("../models/categoryModel");

exports.getCategories = asyncHandler (async(req, res) => {
    const categories = await CategoryModel.find({});
    res.status(200).json({results : categories.length, data : categories});
});

exports.createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name;
    //async await
    const category = await CategoryModel.create({name, slug : slugify(name)});
    res.status(201).json({ data: category});
});