import express, { json } from "express";
import { registerUser } from "../controllers/authController.js";
import validateUserInput from "../middleware/userValidation.js";

const router = express.Router();

router.post("/", validateUserInput, registerUser);

export default router;
