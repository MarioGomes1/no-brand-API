import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const validateToken = (req, res, next) => {
  const header = req.headers["token"];
  const token = header && header.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

export default validateToken;
