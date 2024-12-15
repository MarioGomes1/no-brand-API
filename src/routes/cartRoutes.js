import express from "express";
import { getUserCart, saveUserCart } from "../controllers/cartController.js";
const router = express.Router();
router.get("/:id", getUserCart);
router.post("/", saveUserCart);

export default router;
