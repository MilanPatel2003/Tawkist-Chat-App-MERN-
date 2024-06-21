import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js";
import dbConnection from "./db/dbConnection.js";

const app = new express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cookieParser())
app.use(express.json()) // parse json data (from req.body)

app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user", userRoutes)

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server is running on port ${PORT}`);
});
