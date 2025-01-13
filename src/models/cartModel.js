import pool from "../config/db.js";

const modelSaveCart = async (cart) => {
  const { products, userId } = cart;
  console.log(cart);
  const insertPromises = products.map((product) => {
    const { title, selectedSize, quantity } = product;
    return pool.query(
      `
INSERT INTO cart(user_id, product_id, size_id, quantity)
SELECT
	$1 as user_id,
	p.product_id,
	s.size_id,
	$2 as quantity
FROM product p
JOIN size s ON s.size_name = $3
WHERE p.product_name = $4
ON CONFLICT (user_id, product_id, size_id)
  DO UPDATE
    SET quantity = cart.quantity + EXCLUDED.quantity;`,
      [userId, quantity, selectedSize, title]
    );
  });
  `  `;
  await Promise.all(insertPromises);
  return { success: true };
};
const modelDeleteCart = async () => {};

const modelGetCart = async (userId) => {
  const cart = await pool.query(
    `
       SELECT description, price, product_name,image, c.user_id, c.quantity, s.size_name
        FROM product p
        JOIN cart c ON c.product_id = p.product_id 
        JOIN size s ON s.size_id=c.size_id
        WHERE c.user_id=$1
        `,
    [userId]
  );
  return cart.rows;
};

export { modelSaveCart, modelDeleteCart, modelGetCart };
