import express from "express";
import { getUserCart, saveUserCart } from "../controllers/cartController.js";
import validateToken from "../middleware/validateToken.js";
const router = express.Router();
router.get("/", validateToken, getUserCart);
router.post("/", validateToken, saveUserCart);

export default router;
