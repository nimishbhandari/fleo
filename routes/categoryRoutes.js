import express from "express";
import {
  addCategory,
  findcategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.route("/").get(findcategory);
router.route("/addCategory").post(addCategory);

export default router;
