import express, { json } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import validateUserInput from "../middleware/userValidation.js";

const router = express.Router();

router.post("/register", validateUserInput, registerUser);
router.post("/login", validateUserInput, loginUser);

export default router;
