import pg from "pg";
const { Pool } = pg;
import dotenv from "dotenv";
dotenv.config();

//Setting up postgres client
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool
  .connect()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("Connection error", err));

export default pool;
