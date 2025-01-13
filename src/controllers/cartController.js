import { modelGetCart, modelSaveCart } from "../models/cartModel.js";

const saveUserCart = async (req, res) => {
  const userId = req.user.id;
  const cart = { ...req.body, userId };
  try {
    const savedCart = await modelSaveCart(cart);
    res.json(savedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserCart = async (req, res) => {
  const userId = req.user.id;
  try {
    const cart = await modelGetCart(userId);
    res.json(cart);
  } catch (error) {}
};
export { saveUserCart, getUserCart };
