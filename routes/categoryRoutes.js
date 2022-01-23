import express from "express";
import { addCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.route("/addCategory").post(addCategory);

export default router;
