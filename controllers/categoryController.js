import Category from "../models/categoryModel.js";
import asyncHandler from "express-async-handler";

//@desc     Add a category
//@routes   POST /api/category
//@access   PUBLIC
const addCategory = asyncHandler(async (req, res) => {
  const { categoryName } = req.body;
  const categoryExist = await Category.findOne({ categoryName });

  if (categoryExist) {
    res.status(400);
    throw new Error("Category Already Exist");
  }

  const category = await Category.create({
    categoryName,
  });

  if (category) {
    res.status(201).json({
      _id: category._id,
      categoryName: category.categoryName,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Category data");
  }
});

export { addCategory };
