import { modelCreateUser } from "../models/authModel.js";
import { modelGetUser } from "../models/userModel.js";

import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const registerUser = async (req, res) => {
  const { password, email, username, isadmin = false } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = { hashedPassword, email, username, isadmin };

  try {
    const user = await modelCreateUser(newUser);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await modelGetUser(username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET
    );

    // const { password, ...rest } = user;
    res.json({ user, accessToken });
  } catch (err) {
    res.status(403).json({ error: err });
  }
};

//TODO MOVE TO MIDDLEWARE

export { registerUser, loginUser };
