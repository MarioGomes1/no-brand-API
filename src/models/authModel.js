import pool from "../config/db.js";

const modelCreateUser = async ({
  username,
  hashedPassword,
  email,
  isadmin,
}) => {
  const result = await pool.query(
    `
        INSERT INTO public.user(username, password, email, isadmin)
        VALUES($1, $2, $3, $4)
        RETURNING *
        `,
    [username, hashedPassword, email, isadmin]
  );
  return result.rows[0];
};
const modelLogin = async () => {};

export { modelCreateUser };
