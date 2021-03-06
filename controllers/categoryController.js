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

//@desc     Update a category by name
//@routes   PUT /api/category/edit
//@access   PUBLIC
const updateCategory = asyncHandler(async (req, res) => {
  const { name, currentSales, totalTarget } = req.body;

  const category = await Category.findOne({ name });

  if (category) {
    category.currentSales = currentSales || category.currentSales;
    category.totalTarget = totalTarget || category.totalTarget;

    let progress = Number(((currentSales / totalTarget) * 100).toFixed(2));
    let color;
    let label;

    if (progress <= 33) {
      category.color = "red";
      category.label = "At Risk";
    } else if (progress > 33 && progress <= 66) {
      category.color = "yellow";
      category.label = "off track";
    } else {
      category.color = "green";
      category.label = "on track";
    }

    const updatecategory = await category.save();

    res.json({
      _id: updatecategory._id,
      name: updatecategory.name,
      currentSales: updatecategory.currentSales,
      totalTarget: updatecategory.totalTarget,
      progress: updatecategory.progress,
      color: updatecategory.color,
      label: updatecategory.label,
    });
  } else {
    res.status(401);
    throw new Error("category Not found");
  }
});

//@desc     Delete a category by name
//@routes   Delete /api/category/delete
//@access   PUBLIC
const deleteCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.findOneAndDelete({ name });

  if (category) {
    res.status(201).json({ message: "Success" });
  }
});

export { addCategory, findcategory, updateCategory, deleteCategory };
