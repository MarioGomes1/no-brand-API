import { modelDeleteCart, modelSaveCart } from "../models/cartModel.js";

const saveUserCart = async (req, res) => {
  console.log(req.body);
  try {
    const cart = await modelSaveCart(req.body);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserCart = async (req, res) => {};
export { saveUserCart, getUserCart };
