import {
  modelCreateProduct,
  modelGetAllProducts,
  modelGetProductById,
} from "../models/productModel.js";

const createNewProduct = async (req, res) => {
  try {
    const product = await modelCreateProduct(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await modelGetAllProducts(req.query.category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await modelGetProductById(req.params.id);
    res.json(product);
  } catch (error) {
    return res.status(400).json({ error: "Product not found" });
  }
};

export { getAllProducts, getProductById, createNewProduct };
