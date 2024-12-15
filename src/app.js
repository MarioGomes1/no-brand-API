import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

//Middleware setup
//Use helmet to secure HTTP headers.
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(helmet());
app.use(express.json());

//Routes
app.use("/api/v1", routes);

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something is not working right..." });
});

export default app;
