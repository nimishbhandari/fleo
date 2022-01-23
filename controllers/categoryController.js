import Category from "../models/categoryModel.js";
import asyncHandler from "express-async-handler";

//@desc     Add a category
//@routes   POST /api/category
//@access   PUBLIC
const addCategory = asyncHandler(async (req, res) => {
  const { name, currentSales, totalTarget } = req.body;

  const categoryExist = await Category.findOne({ name });

  if (categoryExist) {
    res.status(400);
    throw new Error("Category Already Exist");
  }

  let progress = Number(((currentSales / totalTarget) * 100).toFixed(2));
  let color;
  let label;

  if (progress <= 33) {
    color = "red";
    label = "At Risk";
  } else if (progress > 33 && progress <= 66) {
    color = "yellow";
    label = "off track";
  } else {
    color = "green";
    label = "on track";
  }

  const category = await Category.create({
    name,
    currentSales,
    totalTarget,
    progress,
    color,
    label,
  });

  if (category) {
    res.status(201).json({
      _id: category._id,
      name: category.name,
      currentSales: category.currentSales,
      totalTarget: category.totalTarget,
      progress: category.progress,
      color: category.color,
      label: category.label,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Category data");
  }
});

//@desc     Get a category
//@routes   GET /api/category
//@access   PUBLIC
const findcategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.findOne({ name });

  if (category) {
    res.status(201).json({
      _id: category._id,
      name: category.name,
      currentSales: category.currentSales,
      totalTarget: category.totalTarget,
      progress: category.progress,
      color: category.color,
      label: category.label,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Category data");
  }
});

export { addCategory, findcategory };
