import { modelCreateUser } from "../models/authModel.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
  const { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);

  bcrypt.hash((param = false));
};

export { registerUser };
