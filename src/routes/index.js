import express from "express";
import productRoutes from "./productRoutes.js";
import cartRoutes from "./cartRoutes.js";
import userRoutes from "./userRoutes.js";
import authRoutes from "./authRoutes.js";
const router = express.Router();

router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/user", userRoutes);
router.use("/register", authRoutes);

// Example route for health check
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API is up and running!",
  });
});

export default router;
