import express from "express";
import {
  addCategory,
  findcategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(findcategory);
router.route("/edit").put(updateCategory);
router.route("/addCategory").post(addCategory);

export default router;
