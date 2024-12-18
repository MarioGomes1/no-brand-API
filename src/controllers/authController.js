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
  const { username } = req.body;
  //Check if email exists in db
  //should the check be done here or in the sql query?
  //if so, compare the hashedpassword vs the req.body.passeword for a match

  const accessToken = jwt.sign(
    { name: username },
    process.env.ACCESS_TOKEN_SECRET
  );
  res.json(accessToken);
};

//TODO MOVE TO MIDDLEWARE
const verifyToken = (req, res, next) => {
  const header = res.headers;
};
export { registerUser, loginUser };
