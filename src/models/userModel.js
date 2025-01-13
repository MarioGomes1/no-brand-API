import pool from "../config/db.js";

const modelGetUser = async (username) => {
  const user = await pool.query(
    `
        SELECT *
        FROM public.user
        WHERE username = $1;
        `,
    [username]
  );
  console.log(user.rows[0]);
  return user.rows[0];
};
const modelUpdateUser = async () => {};
const modelDeleteUser = async () => {};

export { modelUpdateUser, modelDeleteUser, modelGetUser };
