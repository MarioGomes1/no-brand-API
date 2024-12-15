import pool from "../config/db.js";

//CREATE PRODUCT

const modelCreateProduct = async () => {};

//GET ALL PRODUCTS
const modelGetAllProducts = async (category) => {
  const result = await pool.query(
    `
    SELECT 
        p.description, 
        p.image, p.price, 
        p.product_id as id, 
        p.product_name as title, 
        c.category_name, 
        STRING_AGG(s.size_name, ',') as size
    FROM product p
    JOIN category c ON p.category_id = c.category_id
    JOIN product_size ps ON p.product_id = ps.product_id
    JOIN size s ON ps.size_id = s.size_id
    WHERE c.category_name = $1 OR $1 IS NULL
    GROUP BY  p.product_id,  c.category_name
    
    `,
    [category]
  );
  return result.rows;
};

//Get a product by its ID
const modelGetProductById = async (id) => {
  const product = await pool.query(
    `
    SELECT 
	p.product_name as title,
	p.price,
  p.image,
	p.description,
  p.product_id as id,
	c.category_name as category,
	STRING_AGG(s.size_name, ',') as sizes
FROM product p
JOIN category c ON p.category_id = c.category_id
JOIN product_size ps ON p.product_id = ps.product_id
JOIN size s ON ps.size_id = s.size_id
WHERE p.product_id = $1
GROUP BY 
    p.product_id, p.product_name, p.price, p.description, c.category_name
`,
    [id]
  );

  return product.rows[0];
};

export { modelCreateProduct, modelGetAllProducts, modelGetProductById };
