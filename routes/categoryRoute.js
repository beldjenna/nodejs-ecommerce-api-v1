const express = require("express");
const {getCategories, createCategory, getCategory, updateCategory, deleteCategory} = require("../services/categoryService");
const router = express.Router();

router.route("/").get(getCategories).post(createCategory);
router.route("/:id").get(getCategory);
router.route("/:id").patch(updateCategory).delete(deleteCategory);

module.exports = router;
