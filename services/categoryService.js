const slugify = require("slugify");
const asyncHandler = require('express-async-handler')
const CategoryModel = require("../models/categoryModel");

exports.getCategories = asyncHandler (async(req, res) => {
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 5;
    const skip = (page - 1) * limit;
    const categories = await CategoryModel.find({}).skip(skip).limit(limit);
    res.status(200).json({results : categories.length, page, data : categories});
});

exports.createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name;
    //async await
    const category = await CategoryModel.create({name, slug : slugify(name)});
    res.status(201).json({ data: category});
});