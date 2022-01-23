import express from "express";
import {
  addCategory,
  deleteCategory,
  findcategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(findcategory);
router.route("/edit").put(updateCategory);
router.route("/delete").delete(deleteCategory);
router.route("/addCategory").post(addCategory);

export default router;
