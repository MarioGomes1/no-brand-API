import express from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
} from "../controllers/productContoller.js";
const router = express.Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create", createNewProduct);

export default router;
